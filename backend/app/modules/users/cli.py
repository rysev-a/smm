import click
from flask.cli import AppGroup
from app.core.database import db
from app.utils import generate_from_mock
from .models import User, Role

user_cli = AppGroup('user')
role_cli = AppGroup('role')


@user_cli.command('generate')
def generate_users():
    generate_from_mock(mock='users', model=User, db=db)


@user_cli.command('clear')
def clear():
    User.query.delete()
    db.session.commit()


@role_cli.command('generate')
def generate_roles():
    generate_from_mock(mock='roles', model=Role, db=db)


@user_cli.command('create')
@click.option('--email', prompt='User email')
@click.option('--password', prompt='User password')
@click.option('--role', prompt='User role')
def create(email, password, role):
    role_id = Role.query.filter_by(name=role).first().id
    user = User(email=email, password=password, role_id=role_id)
    db.session.add(user)
    db.session.commit()
