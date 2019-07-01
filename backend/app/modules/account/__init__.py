from app.core.api import api


from .resources import (
    AccountSignin,
    AccountSignup,
    AccountSignout,
    AccountUpdate,
    AccountInfo
)


def init():
    api.add_resource(AccountInfo, '/api/v1/account')
    api.add_resource(AccountSignin, '/api/v1/account/signin')
    api.add_resource(AccountSignup, '/api/v1/account/signup')
    api.add_resource(AccountUpdate, '/api/v1/account/update')
    api.add_resource(AccountSignout, '/api/v1/account/signout')
