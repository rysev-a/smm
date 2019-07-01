import { withRouter } from 'inferno-router';
import { inject, observer } from 'inferno-mobx';
import TaskDetailView from './TaskDetailView';

export default withRouter(
  inject(({ store }) => ({
    taskDetailModel: store.taskDetailModel,
  }))(observer(TaskDetailView))
);
