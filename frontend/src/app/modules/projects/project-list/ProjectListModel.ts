import { observable } from 'mobx';
import { assoc } from 'ramda';
import { projectApi } from 'app/services/api';
import history from 'app/core/history';

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

  editProject = projectId => history.push(`/projects/${projectId}/edit`);

  removeProject = projectId => {
    this.status = assoc('processing', true, this.status);
    projectApi.list
      .delete(projectId)
      .then(() => {
        this.load();
      })
      .catch(() => {
        this.status = assoc('processing', false, this.status);
      });
  };

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
