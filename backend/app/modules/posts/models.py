import enum
import requests
from app.core.database import db

CLIENT_ID = '7157062'
VERSION = '5.102'
OWNER_ID = '-187185077'


class SocialNetwork(enum.Enum):
    vk = 1
    instagram = 2
    facebook = 3
    ok = 4


class PostStatus(enum.Enum):
    processing = 1
    published = 2
    archived = 3


class SocialAccount(db.Model):
    __tablename__ = 'social_accounts'

    id = db.Column(db.Integer, primary_key=True)
    login = db.Column(db.String(length=128), unique=True)
    token = db.Column(db.String(length=128))
    password = db.Column(db.String(length=128))
    social_network = db.Column(
        db.Enum(SocialNetwork), default=SocialNetwork.vk)

    def get_token(self):
        urlParams = {
            'client_id': CLIENT_ID,
            'redirect_uri': 'https://oauth.vk.com/blank.html',
            'response_type': 'token',
            'scope': 'friends,wall,offline',
            'v': VERSION
        }

        urlParamsString = '&'.join(
            [f'{param}={value}' for param, value in urlParams.items()])

        url = f'https://oauth.vk.com/authorize?{urlParamsString}'
        return {'url': url}


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(length=128), unique=True)
    social_network = db.Column(db.String(length=128))
    description = db.Column(db.Text)
    content = db.Column(db.Text)

    social_account_id = db.Column(
        db.Integer, db.ForeignKey('social_accounts.id'))
    social_account = db.relationship(
        'SocialAccount', foreign_keys=[social_account_id])

    status = db.Column(db.Enum(PostStatus),
                       default=PostStatus.processing)

    def public(self):
        urlParams = {
            'owner_id': OWNER_ID,
            'access_token': self.social_account.token,
            'v': VERSION,
            'message': self.content,
        }

        urlParamsString = '&'.join(
            [f'{param}={value}' for param, value in urlParams.items()])

        url = f'https://api.vk.com/method/wall.post?{urlParamsString}'
        requests.get(url)
        self.status = PostStatus.published
        db.session.commit()
