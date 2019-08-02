from flask_restful import Resource, request, marshal
from app.core.crud import ListResource, DetailResource
from app.core.database import db
from .fields import log_list_fields, log_detail_fields
from .models import Log


class LogList(ListResource):
    fields = log_list_fields
    model = Log


class LogDetail(DetailResource):
    fields = log_detail_fields
    model = Log
