from flask_restful import marshal, request, Resource, fields
from app.core.database import db


class DetailResource(Resource):
    model: object
    fields: dict

    def __init__(self):
        super().__init__()

    def get(self, id):
        element = self.model.query.get(id)
        if not element:
            return {'message': 'Not found'}, 404

        return marshal(element, self.fields)

    def delete(self, id):
        element = self.model.query.get(id)
        db.session.delete(element)
        db.session.commit()
        return {
            'message': 'success',
            'id': id
        }, 200

    def put(self, id):
        query = self.model.query.filter_by(id=id)
        query.update(request.json)
        db.session.commit()
        return marshal(query.first(), self.fields)
