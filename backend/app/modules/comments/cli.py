import click
from flask.cli import AppGroup
from app.core.database import db
from app.utils import generate_from_mock
from .models import Comment

comment_cli = AppGroup('comment')


@comment_cli.command('generate')
def generate_comments():
    generate_from_mock(mock='comments', model=Comment, db=db)


@comment_cli.command('clear')
def clear():
    Comment.query.delete()
    db.session.commit()
