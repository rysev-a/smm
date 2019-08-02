from app.core.database import db


class Log(db.Model):
    __tablename__ = 'logging'

    id = db.Column(db.Integer, primary_key=True)
    action = db.Column(db.String(length=128))
    module = db.Column(db.String(length=64))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User')

    created_at = db.Column(db.DateTime, server_default=db.func.now())

    def __str__(self):
        return f"{self.action} {self.module}"
