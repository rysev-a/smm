from flask_restful import fields


user_list_fields = {
    'id': fields.Integer,
    'email': fields.String,
    'first_name': fields.String,
    'first_name': fields.String,
    'last_name': fields.String,
    'patronymic': fields.String,
    'phone': fields.String,
}

user_detail_fields = {
    'id': fields.Integer,
    'email': fields.String,
    'first_name': fields.String,
    'first_name': fields.String,
    'last_name': fields.String,
    'patronymic': fields.String,
    'phone': fields.String,
    'role': fields.Nested({
        'id': fields.Integer,
        'name': fields.String
    })
}

role_fields = {
    'id': fields.Integer,
    'name': fields.String
}
