from .logging import init_logging_middleware


def init_middlewares(app):
    init_logging_middleware(app)
