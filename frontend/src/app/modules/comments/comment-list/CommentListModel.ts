import { observable } from 'mobx';
import { commentApi } from 'app/services/api';
import accountModel from 'app/modules/account/AccountModel';
import * as moment from 'moment';

class CommentListModel {
  taskId: null;

  @observable items = [];
  @observable editedComment = null;
  @observable newComment = null;
  @observable values = {
    content: '',
    edited: '',
  };
  @observable edited = null;

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

  remove = commentId => {
    commentApi.list.delete(commentId).then(() => {
      this.items = this.items.filter(comment => comment.id !== commentId);
    });
  };

  edit = commentId => {
    this.edited = commentId;
    this.values.edited = this.items.find(
      comment => comment.id === commentId
    ).content;
  };

  reset = () => {
    this.items = [];
  };

  save = () => {
    commentApi.detail
      .put({
        id: this.edited,
        values: {
          content: this.values.edited,
          created_at: moment().format('YYYY-MM-DD HH:mm'),
        },
      })
      .then(({ data }) => {
        this.items = this.items.map(comment =>
          comment.id === data.id ? data : comment
        );
        this.edited = null;
      });
  };
}

export default CommentListModel;
