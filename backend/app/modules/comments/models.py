from app.core.database import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)

    task_id = db.Column(db.Integer, db.ForeignKey('tasks.id'))
    task = db.relationship('Task')

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User')

    created_at = db.Column(db.DateTime, server_default=db.func.now())

    pinned = db.Column(db.Boolean, default=False)

    def __str__(self):
        return self.content
