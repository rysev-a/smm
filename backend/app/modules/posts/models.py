import enum
import requests
from app.core.database import db


ACCESS_TOKEN = 'db7aeafd444b7da218dbb0efb81fe9011798af4e7e6cda751a6f4989b216ba6c62e538d04175c521272f3'
VERSION = '5.52'
OWNER_ID = '-187185077'


class PostStatus(enum.Enum):
    processing = 1
    published = 2
    archived = 3


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(length=128), unique=True)
    social_network = db.Column(db.String(length=128))
    description = db.Column(db.Text)
    content = db.Column(db.Text)

    status = db.Column(db.Enum(PostStatus),
                       default=PostStatus.processing)

    def public(self):
        urlParams = {
            'owner_id': OWNER_ID,
            'access_token': ACCESS_TOKEN,
            'v': VERSION,
            'message': self.content
        }

        urlParamsString = '&'.join(
            [f'{param}={value}' for param, value in urlParams.items()])

        url = f'https://api.vk.com/method/wall.post?{urlParamsString}'
        requests.get(url)
        self.status = PostStatus.published
        db.session.commit()
