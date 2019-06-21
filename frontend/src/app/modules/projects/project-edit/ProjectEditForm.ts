import { observable } from 'mobx';
import { map } from 'ramda';

import Form from 'app/core/plugins/Form/Form';
import history from 'app/core/history';
import { projectApi, userApi } from 'app/services/api';

class ProjectEditForm extends Form {
  constructor() {
    super();
    this.values = this.getDefaultValues();
  }

  @observable userOptions = [];
  @observable projectId = 0;

  submit = values => {
    return projectApi.update.put({ id: this.projectId, values });
  };

  getLabel = ({ email }) => email;

  updateUsers = users => {
    this.values['users'] = users;
  };

  load = projectId => {
    this.projectId = projectId;
    this.processing = true;

    projectApi.detail
      .get(projectId)
      .then(({ data }) => {
        this.values = data;
        this.processing = false;
      })
      .catch(() => {
        this.processing = false;
        console.warn('load fail');
      });
  };

  getFilters = query => {
    const filters = [
      ...(query
        ? [
            {
              key: 'email',
              value: query,
              operator: 'startWith',
            },
          ]
        : []),
      {
        key: 'id',
        operator: 'notin_',
        value: map((user: any) => user.id)(this.values['users']),
      },
    ];

    return filters;
  };

  loadOptions = query => {
    userApi.list
      .get({
        pagination: { page: 1, count: 10 },
        filters: this.getFilters(query),
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

export default ProjectEditForm;
