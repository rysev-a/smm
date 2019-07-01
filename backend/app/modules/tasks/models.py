import enum
from sqlalchemy.dialects.postgresql import JSONB
from app.core.database import db
from ..associations import users_projects_association


class TaskStatus(enum.Enum):
    pending = 1
    progress = 2
    success = 3
    fail = 4


class Task(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(length=128), unique=True)
    description = db.Column(db.Text)

    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    creator = db.relationship(
        'User', foreign_keys=[creator_id])

    assignee_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    assignee = db.relationship('User', foreign_keys=[assignee_id])

    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'))
    project = db.relationship('Project')

    status = db.Column(db.Enum(TaskStatus),
                       default=TaskStatus.pending)

    created_on = db.Column(db.DateTime, server_default=db.func.now())

    def __str__(self):
        return self.name
