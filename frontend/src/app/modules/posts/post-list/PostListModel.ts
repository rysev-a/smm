import { observable } from 'mobx';
import { assoc } from 'ramda';
import { postApi } from 'app/services/api';
import history from 'app/core/history';

class PostListModel {
  // status props
  @observable status = {
    processing: false,
    loaded: false,
  };

  // request props
  @observable sorting = {};
  @observable filters = [];
  @observable pagination = {
    page: 1,
    pages: 0,
  };

  // data props
  @observable items = [];

  editPost = postId => history.push(`/post/${postId}/edit`);

  removePost = postId => {
    this.status = assoc('processing', true, this.status);
    postApi.list
      .delete(postId)
      .then(() => {
        this.load();
      })
      .catch(() => {
        this.status = assoc('processing', false, this.status);
      });
  };

  publicPost = postId => {
    postApi.public(postId).then(({ data: { id } }: any) => {
      this.items = this.items.map((post: any) => {
        return {
          ...post,
          status: post.id === id ? 'published' : post.status,
        };
      });
    });
  };

  load = () => {
    this.status = assoc('processing', true, this.status);

    postApi.list
      .get({
        pagination: this.pagination,
        sorting: this.sorting,
        filters: this.filters,
      })
      .then(({ data: { items } }) => {
        this.items = items;
        this.status = {
          processing: false,
          loaded: true,
        };
      });
  };
}

const postListModel = new PostListModel();

export default postListModel;
