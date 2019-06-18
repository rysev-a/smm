import Form from 'app/core/plugins/Form/Form';
import history from 'app/core/history';
import { projectApi } from 'app/services/api';

class ProjectCreateForm extends Form {
  submit = projectApi.create.post;

  onSuccessCallback = (_, response) => {
    const projectId = response.data.id;
    history.push(`/projects/${projectId}`);
  };
}

const projectCreateForm = new ProjectCreateForm();

export default projectCreateForm;
