import click
from flask.cli import AppGroup
from app.core.database import db
from app.utils import generate_from_mock
from .models import Project

project_cli = AppGroup('project')


@project_cli.command('generate')
def generate_projects():
    generate_from_mock(mock='projects', model=Project, db=db)


@project_cli.command('clear')
def clear():
    Project.query.delete()
    db.session.commit()
