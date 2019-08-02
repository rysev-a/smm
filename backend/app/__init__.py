from flask import Flask
from app.core.database import db
from app.core.api import api
from app.core.migrate import migrate
from app.core.auth import login_manager

from app.modules import modules
from app.middlewares import init_middlewares


def create_app(settings='app.settings.development'):
    app = Flask(__name__)
    app.config.from_object(settings)

    # init database
    db.init_app(app)
    migrate.init_app(app, db)

    modules.init_app(app)
    init_middlewares(app)

    api.init_app(app)

    # init auth
    login_manager.init_app(app)

    return app
