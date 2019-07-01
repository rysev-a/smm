from flask_restful import fields

user_fields = {
    'id': fields.Integer,
    'email': fields.String,
    'first_name': fields.String,
    'last_name': fields.String,
}

project_fields = {
    'id': fields.Integer,
    'name': fields.String,
}

task_list_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'description': fields.String,
    'project': fields.Nested(project_fields),
    'creator': fields.Nested(user_fields),
    'assignee': fields.Nested(user_fields),
    'status': fields.String,
}

task_detail_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'description': fields.String,
    'project': fields.Nested(project_fields),
    'creator': fields.Nested(user_fields),
    'assignee': fields.Nested(user_fields),
    'status': fields.String
}
