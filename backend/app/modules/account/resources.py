from flask import make_response
from flask_restful import Resource, marshal, request
from flask_login import login_user, logout_user, current_user
from app.core.database import db
from app.modules.users.models import User
from app.modules.users.fields import user_detail_fields


class AccountInfo(Resource):
    @staticmethod
    def get():
        if current_user.is_authenticated:
            return marshal(current_user, user_detail_fields)

        return {'message': 'not authincated'}, 400


class AccountSignup(Resource):
    @staticmethod
    def post():
        exist_user = User.query.filter_by(email=request.json['email']).first()
        if exist_user:
            return {'message': {
                'email': 'Email already exists'
            }}, 400

        user = User(**request.json)
        db.session.add(user)
        db.session.commit()
        login_user(user)

        return {'message': 'signup ok'}


class AccountSignin(Resource):
    @staticmethod
    def post():
        email = request.json.get('email')
        password = request.json.get('password')

        user = User.query.filter_by(email=email).first()
        if not user:
            return {
                'message': {'email': 'not found'}
            }, 400

        if not user.verify_password(password):
            return {
                'message': {'password': 'wrong password'}
            }, 400

        login_user(user)
        return {'message': 'signin ok'}


class AccountSignout(Resource):
    @staticmethod
    def post():
        logout_user()
        return {'message': 'signout ok'}


class AccountUpdate(Resource):
    @staticmethod
    def post():
        query = User.query.filter_by(id=current_user.id)
        query.update(request.json)
        db.session.commit()
        return {'message': 'update account ok'}
