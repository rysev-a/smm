import { observable, action } from 'mobx';
import { taskApi } from 'app/services/api';
import history from 'app/core/history';

const defaultTaskDetailData = () => ({
  id: 0,
  name: '',
  description: '',
  creator: {},
  assignee: {},
  project: {},
});

class TaskDetailModel {
  @observable loaded = false;
  @observable processing = false;
  @observable data = defaultTaskDetailData();

  @action.bound
  load(taskId, commentListModel) {
    this.processing = true;

    taskApi.detail
      .get(taskId)
      .then(response => {
        this.onSuccess(response);
        commentListModel.initialize(response.data.comments, taskId);
      })
      .catch(() => {
        this.processing = false;
      });
  }

  @action.bound
  onSuccess({ data }) {
    this.data = data;
    this.loaded = true;
    this.processing = false;
  }

  @action.bound
  editTask() {
    history.push(`/tasks/${this.data.id}/edit`);
  }

  @action.bound
  reset() {
    this.data = defaultTaskDetailData();
    this.loaded = false;
  }
}

export default TaskDetailModel;
