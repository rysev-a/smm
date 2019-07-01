from app.core.api import api
from .resources import ProjectDetail, ProjectList, ProjectCreate, ProjectUpdate


def init():
    api.add_resource(ProjectList, '/api/v1/projects')
    api.add_resource(ProjectDetail, '/api/v1/projects/<int:id>')
    api.add_resource(ProjectUpdate, '/api/v1/projects/<int:id>/update')
    api.add_resource(ProjectCreate, '/api/v1/projects/create')
