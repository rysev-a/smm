import click
from flask.cli import AppGroup
from app.core.database import db
from app.utils import generate_from_mock
from .models import Post

post_cli = AppGroup('post')


@post_cli.command('generate')
def generate_posts():
    generate_from_mock(mock='posts', model=Post, db=db)


@post_cli.command('clear')
def clear():
    Post.query.delete()
    db.session.commit()
