from flask_restful import Resource, request, marshal
from flask_login import current_user
from app.core.crud import ListResource, DetailResource
from app.core.database import db
from .fields import project_detail_fields, project_list_fields
from .models import Project


class ProjectList(ListResource):
    fields = project_list_fields
    model = Project


class ProjectDetail(DetailResource):
    fields = project_detail_fields
    model = Project


class ProjectCreate(Resource):
    def post(self):
        project = Project(
            creator_id=current_user.id,
            name=request.json.get('name'),
            description=request.json.get('description')
        )

        db.session.add(project)
        db.session.commit()

        return marshal(project, project_detail_fields)


class ProjectUpdate(Resource):
    def put(self, id):
        query = Project.query.filter_by(id=id)
        project = Project.query.get(id)

        # update main info
        query.update(request.json)
        db.session.commit()
        return marshal(query.first(), project_detail_fields)
