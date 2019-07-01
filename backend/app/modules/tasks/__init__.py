from app.core.api import api
from .resources import TaskDetail, TaskList, TaskCreate, TaskUpdate


def init():
    api.add_resource(TaskList, '/api/v1/tasks')
    api.add_resource(TaskDetail, '/api/v1/tasks/<int:id>')
    api.add_resource(TaskCreate, '/api/v1/tasks/create')
    api.add_resource(TaskUpdate, '/api/v1/tasks/<int:id>/update')
