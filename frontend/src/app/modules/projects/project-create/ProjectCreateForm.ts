import Form from 'app/core/plugins/Form/Form';
import history from 'app/core/history';
import { projectApi, userApi } from 'app/services/api';
import { observable } from 'mobx';
import { map } from 'ramda';

class ProjectCreateForm extends Form {
  constructor() {
    super();
    this.values = this.getDefaultValues();
  }

  @observable userOptions = [];

  submit = projectApi.create.post;

  getLabel = ({ email }) => email;

  updateUsers = users => {
    this.values['users'] = users;
  };

  loadOptions = query => {
    const filters = query
      ? [
          {
            key: 'email',
            value: query,
            operator: 'startWith',
          },
        ]
      : [];

    userApi.list
      .get({
        pagination: { page: 1, count: 10 },
        filters,
        sorting: {},
      })
      .then(response => {
        this.userOptions = response.data.items;
      });
  };

  onSuccessCallback = (_, response) => {
    const projectId = response.data.id;
    history.push(`/projects/${projectId}`);
  };

  serializeValues = values => {
    return {
      name: values.name,
      description: values.description,
      users: map((user: any) => user.id)(values.users),
    };
  };

  getDefaultValues = () => ({ name: '', description: '', users: [] });
}

const projectCreateForm = new ProjectCreateForm();

export default projectCreateForm;
