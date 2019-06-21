from flask_restful import Resource, request, marshal
from flask_login import current_user
from app.core.crud import ListResource, DetailResource
from app.core.database import db
from .fields import project_detail_fields, project_list_fields
from .models import Project, users_projects_association


class ProjectList(ListResource):
    fields = project_list_fields
    model = Project


class ProjectDetail(DetailResource):
    fields = project_detail_fields
    model = Project


class ProjectCreate(Resource):
    def post(self):
        user_ids = request.json.get('users', [])
        if request.json.get('users'):
            del request.json['users']

        project = Project(
            creator_id=current_user.id,
            name=request.json.get('name'),
            description=request.json.get('description')
        )

        db.session.add(project)
        db.session.commit()

        if len(user_ids) > 0:
            project.add_users(user_ids)

        return marshal(project, project_detail_fields)


class ProjectUpdate(Resource):
    def put(self, id):
        query = Project.query.filter_by(id=id)
        project = Project.query.get(id)

        self.update_users(request.json, project)

        query.update(request.json)
        db.session.commit()
        return marshal(query.first(), project_detail_fields)

    @staticmethod
    def update_users(request_json, project):
        user_ids = request_json['users']
        prev_user_ids = [user.id for user in project.users]

        removed_user_ids = list(set(prev_user_ids) - set(user_ids))
        add_users_ids = list(set(user_ids) - set(prev_user_ids))

        project.remove_users(removed_user_ids)
        project.add_users(add_users_ids)

        del request_json['users']
