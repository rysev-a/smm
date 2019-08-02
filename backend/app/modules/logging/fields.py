from flask_restful import fields

user_fields = {
    'id': fields.Integer,
    'email': fields.String,
    'first_name': fields.String,
    'last_name': fields.String,
}

log_detail_fields = {
    'id': fields.Integer,
    'module': fields.String,
    'action': fields.String,
    'created_at': fields.String,
    'user': fields.Nested(user_fields)
}

log_list_fields = {
    'id': fields.Integer,
    'module': fields.String,
    'action': fields.String,
    'created_at': fields.String,
    'user': fields.Nested(user_fields)
}
