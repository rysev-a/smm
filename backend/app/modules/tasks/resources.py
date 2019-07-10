from flask_restful import Resource, request, marshal
from flask_login import current_user
from app.core.crud import ListResource, DetailResource
from app.core.database import db
from .fields import task_detail_fields, task_list_fields
from .models import Task
from .validate import task_validator


class TaskList(ListResource):
    fields = task_list_fields
    model = Task


class TaskDetail(DetailResource):
    fields = task_detail_fields
    model = Task


class TaskCreate(Resource):
    def post(self):

        if not task_validator(request.json):
            print(task_validator.errors)

        task_with_exists_name = Task.query.filter(
            Task.name == request.json['name']).first()

        if task_with_exists_name:
            return {'message': {'name': 'TASK_NAME_ALREADY_EXIST'}}, 400

        task = Task(
            creator_id=current_user.id,
            assignee_id=request.json.get('assignee'),
            project_id=request.json.get('project'),
            name=request.json.get('name'),
            description=request.json.get('description')
        )

        db.session.add(task)
        db.session.commit()

        return marshal(task, task_detail_fields)


class TaskUpdate(Resource):
    def put(self, id):
        query = Task.query.filter_by(id=id)
        project = Task.query.get(id)
        query.update({
            'assignee_id': request.json.get('assignee'),
            'project_id': request.json.get('project'),
            'name': request.json.get('name'),
            'description': request.json.get('description'),
            'status': request.json.get('status'),
            'tag': request.json.get('tag'),
        })
        db.session.commit()
        return marshal(query.first(), task_detail_fields)
