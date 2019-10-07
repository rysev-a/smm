from flask_restful import fields


post_list_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'description': fields.String,
    'status': fields.String(
        attribute=lambda post:
        str(post.status).replace('PostStatus.', '')),
}

post_detail_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'description': fields.String,
    'content': fields.String,
    'social_network': fields.String,
    'status': fields.String(
        attribute=lambda post:
        str(post.status).replace('PostStatus.', '')),
}
