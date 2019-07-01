from cerberus import Validator

task_schema = {
    'name': {
        'type': 'number'
    },
    'description': {
        'type': 'string'
    }
}

task_validator = Validator(task_schema)
