import Form from 'app/core/plugins/Form/Form';
import history from 'app/core/history';
import { userApi, taskApi, projectApi } from 'app/services/api';
import AsyncList from 'app/core/plugins/Form/AsyncList';
import { validate } from './validators';

class TaskCreateForm extends Form {
  assigneeOptions: AsyncList;
  projectOptions: AsyncList;

  constructor() {
    super();
    this.values = this.getDefaultValues();
    this.assigneeOptions = new AsyncList(userApi);
    this.projectOptions = new AsyncList(projectApi);
  }

  validate = validate;
  submit = taskApi.create.post;

  getAssigneeLabel = ({ email }) => email;

  getProjectLabel = ({ name }) => name;

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
    const taskId = response.data.id;
    history.push(`/tasks/${taskId}`);
  };

  serializeValues = values => {
    return {
      name: values.name,
      description: values.description,
      assignee: values.assignee.id,
      project: values.project.id,
      file: values.file,
      priority: values.priority,
    };
  };

  getDefaultValues = () => ({
    name: '',
    description: '',
    assignee: {},
    project: {},
    tag: 'content',
    priority: 'low',
    file: null,
  });

  attachFile = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      let encoded = reader.result.replace(/^data:(.*;base64,)?/, '');
      if (encoded.length % 4 > 0) {
        encoded += '='.repeat(4 - (encoded.length % 4));
      }

      this.values['file'] = {
        name: file.name,
        base64: encoded,
      };
    };
  };
}

export default TaskCreateForm;
