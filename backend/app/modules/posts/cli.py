import click
from flask.cli import AppGroup
from app.core.database import db
from app.utils import generate_from_mock
from .models import Post, SocialAccount

post_cli = AppGroup('post')
social_account_cli = AppGroup('social_account')


@post_cli.command('generate')
def generate_posts():
    generate_from_mock(mock='posts', model=Post, db=db)


@post_cli.command('clear')
def clear():
    Post.query.delete()
    db.session.commit()


@social_account_cli.command('generate')
def generate_social_accounts():
    generate_from_mock(mock='social-accounts', model=SocialAccount, db=db)


@social_account_cli.command('clear')
def clear():
    SocialAccount.query.delete()
    db.session.commit()
