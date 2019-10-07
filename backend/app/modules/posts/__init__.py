from app.core.api import api
from .resources import PostDetail, PostList, PostPublic


def init():
    api.add_resource(PostList, '/api/v1/posts')
    api.add_resource(PostPublic, '/api/v1/posts/public')
    api.add_resource(PostDetail, '/api/v1/posts/<int:id>')
