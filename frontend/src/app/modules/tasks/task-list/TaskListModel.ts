import { taskApi } from 'app/services/api';
import AsyncList from 'app/core/plugins/Form/AsyncList';
import history from 'app/core/history';

class TaskListModel extends AsyncList {
  constructor() {
    super(taskApi);
  }

  editTask = taskId => {
    history.push(`/tasks/${taskId}/edit`);
  };
}

export default TaskListModel;
