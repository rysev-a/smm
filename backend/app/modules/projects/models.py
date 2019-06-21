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

    def add_users(self, added_user_ids):
        for user_id in added_user_ids:
            insert_user = users_projects_association.insert().values(
                user_id=user_id, project_id=self.id)
            db.session.execute(insert_user)
        db.session.commit()

    def remove_users(self, removed_user_ids):
        remove_query = db.session.query(users_projects_association).filter(
            users_projects_association.c.user_id.in_(removed_user_ids))

        remove_query.delete(synchronize_session=False)
        db.session.commit()

    def __str__(self):
        return self.name
