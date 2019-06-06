from flask import Flask
from app.core.database import db
from app.core.api import api
from app.core.migrate import migrate
from app.core.auth import login_manager
from app.users import init_users
from app.ping import init_ping


def create_app(settings='app.settings.development'):
    app = Flask(__name__)
    app.config.from_object(settings)

    # init database
    db.init_app(app)
    migrate.init_app(app, db)

    # init modules
    # example:
    # init_projects()

    # init modules and api
    init_users()
    init_ping()
    api.init_app(app)

    # init auth
    login_manager.init_app(app)

    return app
