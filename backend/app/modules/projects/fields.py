from flask_restful import fields

user_fields = {
    'id': fields.Integer,
    'email': fields.String,
    'first_name': fields.String,
    'last_name': fields.String,
}

project_list_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'description': fields.String,
    'creator': fields.Nested(user_fields)
}

project_detail_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'description': fields.String,
    'creator': fields.Nested(user_fields),
}
