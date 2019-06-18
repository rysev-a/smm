import { observable } from 'mobx';
import { assoc } from 'ramda';
import { userApi } from 'app/services/api';

class UserListModel {
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

  load = () => {
    this.status = assoc('processing', true, this.status);

    userApi.list
      .get({
        pagination: this.pagination,
        sorting: this.sorting,
        filters: this.filters,
      })
      .then(({ data: { items, page, pages } }) => {
        this.items = items;

        this.pagination = {
          page,
          pages,
        };

        this.status = {
          processing: false,
          loaded: true,
        };
      });
  };

  pageSet = page => {
    this.pagination = assoc('page', page, this.pagination);
    this.load();
  };
}

const projectListModel = new UserListModel();

export default projectListModel;
