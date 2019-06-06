from app.core.api import api
from .resources import Ping


def init_ping():
    api.add_resource(Ping, '/api/v1/ping')
