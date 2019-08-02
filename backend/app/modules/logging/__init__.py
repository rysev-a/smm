from app.core.api import api
from .resources import LogList, LogDetail


def init():
    api.add_resource(LogList, '/api/v1/logs')
    api.add_resource(LogDetail, '/api/v1/logs/<int:id>')
