from flask_restful import fields

task_fields = {
    'id': fields.Integer,
    'name': fields.String,
}

user_fields = {
    'id': fields.Integer,
    'email': fields.String,
    'first_name': fields.String,
    'last_name': fields.String,
}

comment_list_fields = {
    'id': fields.Integer,
    'content': fields.String,
    'created_at': fields.String,
    'user': fields.Nested(user_fields),
    'task': fields.Nested(task_fields)
}

comment_detail_fields = {
    'id': fields.Integer,
    'content': fields.String,
    'created_at': fields.String,
    'user': fields.Nested(user_fields),
    'task': fields.Nested(task_fields)
}
