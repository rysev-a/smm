import os
import yaml
from flask import current_app


def generate_from_mock(mock, model, db, extra_fields=None):
    base_dir = os.path.dirname(os.path.dirname(current_app.instance_path))
    mock_path = f'{base_dir}/fixtures/{mock}.yaml'

    with open(mock_path) as mock_data:
        for model_data in yaml.load(mock_data, Loader=yaml.FullLoader):
            db.session.add(model(**model_data))

    db.session.commit()
