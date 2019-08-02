from flask import request
from flask_login import current_user
from app.modules.logging.models import Log
from app.core.database import db

method_action_map = {
    'POST': 'create',
    'PUT': 'update',
    'DELETE': 'remove',
}


def get_action(requestType):
    return method_action_map.get(requestType)


def get_module_by_url(url):
    modules = ['tasks', 'comments', 'projects', 'logs']
    for module_name in modules:
        if module_name in url:
            return module_name

    return 'unknown'


def init_logging_middleware(app):
    @app.before_request
    def before_request():
        action = get_action(str(request.method))

        if action:
            module = get_module_by_url(str(request.url_rule))

            if module != 'logs':
                log = Log(
                    user_id=current_user.id,
                    module=module,
                    action=action
                )

                db.session.add(log)
                db.session.commit()
