import { withRouter } from 'inferno-router';
import { inject, observer } from 'inferno-mobx';
import TaskCreateView from './TaskCreateView';

const TaskCreate = withRouter(
  inject(({ store }) => ({
    taskCreateForm: store.taskCreateForm,
  }))(observer(TaskCreateView))
);

export default TaskCreate;
