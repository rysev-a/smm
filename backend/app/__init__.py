from flask import Flask
from app.core.database import db
from app.core.api import api
from app.core.migrate import migrate
from app.core.auth import login_manager
from app.modules.users import init_users
from app.modules.ping import init_ping
from app.modules.account import init_account
from app.modules.projects import init_projects
from app.modules.cypress import init_cypress


import time


def create_app(settings='app.settings.development'):
    app = Flask(__name__)
    app.config.from_object(settings)

    @app.before_request
    def before_request():
        # time.sleep(1)
        pass

    # init database
    db.init_app(app)
    migrate.init_app(app, db)

    # init modules and api
    init_users()
    init_ping()
    init_account()
    init_projects()
    init_cypress()

    api.init_app(app)

    # init auth
    login_manager.init_app(app)

    return app
