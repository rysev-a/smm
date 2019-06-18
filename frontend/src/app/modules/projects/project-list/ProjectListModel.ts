import { observable } from 'mobx';
import { assoc } from 'ramda';
import { projectApi } from 'app/services/api';

class ProjectListModel {
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

    projectApi.list
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

const projectListModel = new ProjectListModel();

export default projectListModel;
