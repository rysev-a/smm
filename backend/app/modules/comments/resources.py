from app.core.crud import ListResource, DetailResource
from app.core.database import db
from .fields import comment_detail_fields, comment_list_fields
from .models import Comment


class CommentList(ListResource):
    fields = comment_list_fields
    model = Comment


class CommentDetail(DetailResource):
    fields = comment_detail_fields
    model = Comment
