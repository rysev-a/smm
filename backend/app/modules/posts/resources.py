from flask_restful import Resource, request, marshal
from app.core.crud import ListResource, DetailResource
from app.core.database import db
from .fields import post_detail_fields, post_list_fields
from .models import Post


class PostList(ListResource):
    fields = post_list_fields
    model = Post


class PostDetail(DetailResource):
    fields = post_detail_fields
    model = Post


class PostPublic(Resource):
    def post(self):
        postId = request.json.get('postId')
        post = Post.query.get(postId)
        post.public()

        return marshal(post, post_detail_fields)
