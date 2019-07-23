from app.core.api import api
from .resources import CommentDetail, CommentList


def init():
    api.add_resource(CommentList, '/api/v1/comments')
    api.add_resource(CommentDetail, '/api/v1/comments/<int:id>')
