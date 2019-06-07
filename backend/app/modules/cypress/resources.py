
from flask_restful import Resource
from app.utils import generate_from_mock
from app.core.database import db
from app.modules.users.models import Role, User


class CypressClear(Resource):
    def post(self):
        db.drop_all()
        db.create_all()
        return {'message': 'ok'}


class CypressGenerate(Resource):
    def post(self):
        generate_from_mock(mock='roles', model=Role, db=db)
        generate_from_mock(mock='users', model=User, db=db)
        return {'message': 'ok'}
