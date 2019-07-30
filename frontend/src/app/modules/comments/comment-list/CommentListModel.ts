import { observable, computed } from 'mobx';
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
    newPinned: false,
    edited: '',
    editedPinned: false,
  };
  @observable edited = null;

  @observable errors = {};

  @computed get sortedItems() {
    return [
      ...this.items.filter(comment => comment.pinned),
      ...this.items.filter(comment => !comment.pinned),
    ];
  }

  initialize = (items, taskId) => {
    this.taskId = taskId;
    this.items = items;
  };

  togglePinned = e => {
    this.values[e.target.name] = !this.values[e.target.name];
  };

  handleChange = e => {
    this.values[e.target.name] = e.target.value;
  };

  submit = () => {
    commentApi.list
      .post({
        content: this.values.content,
        pinned: this.values.newPinned,
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
    this.editedComment = this.items.find(comment => comment.id === commentId);

    this.values.edited = this.editedComment.content;
    this.values.editedPinned = this.editedComment.pinned;
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
          pinned: this.values.editedPinned,
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
