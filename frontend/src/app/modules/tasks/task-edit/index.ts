import { withRouter } from 'inferno-router';
import { inject, observer } from 'inferno-mobx';
import TaskEditView from './TaskEditView';

export default withRouter(
  inject(({ store }) => ({
    taskEditForm: store.taskEditForm,
  }))(observer(TaskEditView))
);
