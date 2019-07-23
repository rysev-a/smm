import { observable } from 'mobx';
import { commentApi } from 'app/services/api';
import accountModel from 'app/modules/account/AccountModel';

class CommentListModel {
  taskId: null;

  @observable items = [];
  @observable editedComment = null;
  @observable newComment = null;
  @observable values = {
    content: '',
  };

  @observable errors = {};

  initialize = (items, taskId) => {
    this.taskId = taskId;
    this.items = items;
  };

  handleChange = e => {
    this.values[e.target.name] = e.target.value;
  };

  submit = () => {
    commentApi.list
      .post({
        content: this.values.content,
        task_id: this.taskId,
        user_id: accountModel.data.id,
      })
      .then(({ data }) => {
        this.items = [...this.items, data];
        this.values = {
          ...this.values,
          content: '',
        };
      });
  };

  reset = () => {
    this.items = [];
  };
}

export default CommentListModel;
