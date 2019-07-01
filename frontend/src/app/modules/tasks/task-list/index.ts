import { withRouter } from 'inferno-router';
import { inject, observer } from 'inferno-mobx';
import TaskListView from './TaskListView';

export default withRouter(
  inject(({ store }) => ({
    taskList: store.taskListModel,
  }))(observer(TaskListView))
);
