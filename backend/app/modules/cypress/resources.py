
from flask_restful import Resource
from app.utils import generate_from_mock
from app.core.database import db
from app.modules.users.models import Role, User
from app.modules.projects.models import Project
from app.modules.tasks.models import Task


class CypressClear(Resource):
    def post(self):
        db.drop_all()
        db.create_all()
        return {'message': 'ok'}


class CypressGenerate(Resource):
    def post(self):
        generate_from_mock(mock='roles', model=Role, db=db)
        generate_from_mock(mock='users', model=User, db=db)
        generate_from_mock(mock='projects', model=Project, db=db)
        generate_from_mock(mock='tasks', model=Task, db=db)
        return {'message': 'ok'}
