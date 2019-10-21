from app.core.api import api
from .resources import (
    PostDetail,
    PostList,
    PostPublic,
    SocialAccountDetail,
    SocialAccountList,
    SocialAccountGetToken
)


def init():
    api.add_resource(PostList, '/api/v1/posts')
    api.add_resource(PostPublic, '/api/v1/posts/public')
    api.add_resource(PostDetail, '/api/v1/posts/<int:id>')

    api.add_resource(SocialAccountList, '/api/v1/social-accounts')
    api.add_resource(SocialAccountDetail, '/api/v1/social-accounts/<int:id>')
    api.add_resource(SocialAccountGetToken,
                     '/api/v1/social-accounts/<int:id>/get-token')
