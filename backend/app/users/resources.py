from flask_restful import Resource, marshal
from app.core.database import db
from app.core.crud import DetailResource, ListResource
from .models import User, Role
from .fields import user_list_fields, user_detail_fields, role_fields


class UserList(ListResource):
    model = User
    fields = user_list_fields


class UserDetail(DetailResource):
    model = User
    fields = user_detail_fields


class RoleList(ListResource):
    model = Role
    fields = role_fields


class RoleDetail(DetailResource):
    model = Role
    fields = role_fields
