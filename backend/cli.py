import os
import click
from app import create_app
from app.core.database import db
from app.modules.users.cli import user_cli, role_cli
from app.modules.projects.cli import project_cli
from app.modules.tasks.cli import task_cli
from app.modules.comments.cli import comment_cli
from app.modules.posts.cli import post_cli

from app.modules.users.models import User, Role
from app.modules.projects.models import Project
from app.modules.tasks.models import Task
from app.modules.comments.models import Comment
from app.modules.posts.models import Post

app = create_app(os.environ.get(
    'SETTINGS_ENV',
    'app.settings.development'
))

app.cli.add_command(user_cli)
app.cli.add_command(role_cli)
app.cli.add_command(project_cli)
app.cli.add_command(task_cli)
app.cli.add_command(comment_cli)
app.cli.add_command(post_cli)


@app.cli.command()
def clear():
    db.drop_all()
    db.create_all()


@app.shell_context_processor
def make_shell_context():
    return dict(
        app=app,
        db=db,
        User=User,
        Role=Role,
        Project=Project,
        Task=Task,
        Comment=Comment,
        Post=Post,
    )
