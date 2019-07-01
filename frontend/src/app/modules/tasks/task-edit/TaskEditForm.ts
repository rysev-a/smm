import { observable } from 'mobx';
import { map } from 'ramda';

import Form from 'app/core/plugins/Form/Form';
import history from 'app/core/history';
import { taskApi, projectApi, userApi } from 'app/services/api';
import AsyncList from 'app/core/plugins/Form/AsyncList';
import { validate } from './validators';

class TaskEditForm extends Form {
  loadTimer: any;
  assigneeOptions: AsyncList;
  projectOptions: AsyncList;
  taskId: number;

  constructor() {
    super();
    this.values = this.getDefaultValues();
    this.loadTimer = null;
    this.assigneeOptions = new AsyncList(userApi);
    this.projectOptions = new AsyncList(projectApi);
    this.validate = validate;
  }

  @observable userOptions = [];
  @observable projectId = 0;

  submit = values => {
    return taskApi.update.put({ id: this.taskId, values });
  };

  getAssigneeLabel = ({ email }) => email;

  getProjectLabel = ({ name }) => name;

  load = taskId => {
    this.taskId = taskId;
    this.processing = true;

    taskApi.detail
      .get(taskId)
      .then(({ data }) => {
        this.values = data;
        this.processing = false;
      })
      .catch(() => {
        this.processing = false;
        console.warn('load fail');
      });
  };

  updateAssignee = assignee => {
    this.values['assignee'] = {
      id: assignee.id,
      email: assignee.email,
    };
  };

  loadAssigneeOptions = query => {
    this.assigneeOptions.filters = [
      {
        operator: 'startWith',
        key: 'email',
        value: query,
      },
    ];

    this.assigneeOptions.load();
  };

  loadProjectOptions = query => {
    this.projectOptions.filters = [
      {
        operator: 'startWith',
        key: 'name',
        value: query,
      },
    ];

    this.projectOptions.load();
  };

  updateProject = project => {
    this.values['project'] = {
      id: project.id,
      name: project.name,
    };
  };

  onSuccessCallback = (_, response) => {
    const task = response.data.id;
    history.push(`/tasks/${task}`);
  };

  serializeValues = values => {
    return {
      name: values.name,
      description: values.description,
      assignee: values.assignee.id,
      project: values.project.id,
    };
  };

  getDefaultValues = () => ({
    name: '',
    description: '',
    assignee: {},
    project: {},
  });
}

export default TaskEditForm;
