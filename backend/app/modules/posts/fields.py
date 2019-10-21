from flask_restful import fields


social_account_list_fields = {
    'id': fields.Integer,
    'login': fields.String,
    'token': fields.String,
    'password': fields.String,
    'social_network': fields.String(
        attribute=lambda social_account:
        str(social_account.social_network).replace('SocialNetwork.', '')),
}

social_account_detail_fields = {
    'id': fields.Integer,
    'login': fields.String,
    'password': fields.String,
    'token': fields.String,
    'social_network': fields.String(
        attribute=lambda social_account:
        str(social_account.social_network).replace('SocialNetwork.', '')),
}


post_list_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'description': fields.String,
    'status': fields.String(
        attribute=lambda post:
        str(post.status).replace('PostStatus.', '')),
    'social_account': fields.Nested(social_account_detail_fields)
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
    'social_account': fields.Nested(social_account_detail_fields)
}
