import { observable } from 'mobx';
import { assoc } from 'ramda';
import { projectApi, taskApi } from 'app/services/api';

export default class PanelModel {
  // status props
  @observable status = {
    processing: false,
    loaded: false,
  };

  // request props
  @observable projects = [];
  @observable tasks = [];
  @observable activeProjectId = 0;
  @observable activeTaskId = 0;

  setActiveProject = id => {
    this.activeProjectId = id;
    this.loadTasks(id);
  };

  setActiveTask = id => {
    this.activeTaskId = id;
  };

  loadProjects = () => {
    this.setProcessing(true);

    projectApi.list
      .get({
        pagination: {
          page: 1,
          pages: 0,
        },
        filters: [],
        sorting: [],
      })
      .then(({ data: { items } }) => {
        this.setProcessing(false);
        this.setLoading(true);
        this.projects = items;
      });
  };

  loadTasks = projectId => {
    this.setProcessing(true);

    taskApi.list
      .get({
        pagination: {
          page: 1,
          pages: 0,
        },
        sorting: [],
        filters: [
          {
            key: 'project_id',
            value: projectId,
            operator: '==',
          },
        ],
      })
      .then(({ data: { items } }) => {
        this.tasks = items;
        this.setProcessing(false);
      });
  };

  reset = () => {
    this.projects = [];
    this.tasks = [];
  };

  setProcessing = status => {
    this.status = assoc('processing', status, this.status);
  };

  setLoading = status => {
    this.status = assoc('loaded', status, this.status);
  };
}
