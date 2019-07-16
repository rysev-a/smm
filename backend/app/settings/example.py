DEBUG = True
SECRET_KEY = '9%o=_oey@mu!jbsdfsdf*h8^3$*)hzffmi+13413sadfasf-*_ou'

DB_NAME = 'flaskapp_db'
DB_USER = 'postgres'
DB_PASSWORD = 'password'
DB_PORT = '5432'
DB_HOST = 'localhost'
DB_ENGINE = 'postgresql'

SQLALCHEMY_DATABASE_URI = f'{DB_ENGINE}://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}'
SQLALCHEMY_TRACK_MODIFICATIONS = True

MODULES = [
    'ping',
    'users',
    'account',
    'cypress',
]

UPLOAD_FOLDER = 'uploads'
