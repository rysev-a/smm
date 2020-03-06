import { observable } from 'mobx';
import { assoc } from 'ramda';
import { taskApi, projectApi, userApi } from 'app/services/api';
import AsyncList from 'app/core/plugins/Form/AsyncList';

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
  assigneeOptions: AsyncList;
  projectOptions: AsyncList;
  taskForm: any;

  constructor() {
    this.assigneeOptions = new AsyncList(userApi);
    this.projectOptions = new AsyncList(projectApi);
    this.taskForm = {};
  }

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

        this.setActiveProject(this.projects[0].id);
      });
  };

  loadTasks = projectId => {
    this.setProcessing(true);

    taskApi.list
      .get({
        pagination: {
          page: 1,
          pages: 0,
          count: 100,
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

  editTask = ({ id, values }) => {
    this.tasks = this.tasks.map((task: any) => {
      return task.id === id ? { ...task, ...values } : task;
    });

    taskApi.detail.put({ id, values });
  };

  loadAssigneeOptions = query => {
    this.assigneeOptions.filters = [
      {
        operator: 'startWith',
        key: 'email',
        value: query,
      },
    ];

    this.assigneeOptions.load();
  };

  loadProjectOptions = query => {
    this.projectOptions.filters = [
      {
        operator: 'startWith',
        key: 'name',
        value: query,
      },
    ];

    this.projectOptions.load();
  };

  updateProject = project => {
    this.taskForm['project'] = {
      id: project.id,
      name: project.name,
    };
  };

  updateAssignee = assignee => {
    this.taskForm['assignee'] = {
      id: assignee.id,
      email: assignee.email,
    };
  };
}
