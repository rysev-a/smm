from sqlalchemy.dialects.postgresql import JSONB
from app.core.database import db
from ..associations import users_projects_association


class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(length=128), unique=True)
    description = db.Column(db.Text)

    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    creator = db.relationship('User')

    users = db.relationship(
        'User', secondary=users_projects_association, backref='projects')
