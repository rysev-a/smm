from app.core.api import api
from .resources import UserList, UserDetail, RoleList, RoleDetail


def init_users():
    api.add_resource(UserList, '/api/v1/users')
    api.add_resource(UserDetail, '/api/v1/users/<int:id>')

    api.add_resource(RoleList, '/api/v1/roles')
    api.add_resource(RoleDetail, '/api/v1/roles/<int:id>')
