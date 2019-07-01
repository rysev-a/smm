from app.core.api import api
from .resources import CypressClear, CypressGenerate


def init():
    api.add_resource(CypressClear, '/api/v1/cypress/clear')
    api.add_resource(CypressGenerate, '/api/v1/cypress/generate')
