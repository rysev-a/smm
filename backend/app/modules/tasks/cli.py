import click
from flask.cli import AppGroup
from app.core.database import db
from app.utils import generate_from_mock
from .models import Task

task_cli = AppGroup('task')


@task_cli.command('generate')
def generate_users():
    generate_from_mock(mock='tasks', model=Task, db=db)


@task_cli.command('clear')
def clear():
    Task.query.delete()
    db.session.commit()
