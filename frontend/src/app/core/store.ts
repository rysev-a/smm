import UserDetailModel from 'app/modules/users/user-detail/UserDetailModel';
import ProjectDetailModel from 'app/modules/projects/project-detail/ProjectDetailModel';
import ProjectEditForm from 'app/modules/projects/project-edit/ProjectEditForm';
import TaskCreateForm from 'app/modules/tasks/task-create/TaskCreateForm';
import TaskDetailModel from 'app/modules/tasks/task-detail/TaskDetailModel';
import TaskListModel from 'app/modules/tasks/task-list/TaskListModel';
import TaskEditForm from 'app/modules/tasks/task-edit/TaskEditForm';

class ApplicationStore {
  userDetailModel: UserDetailModel;
  projectDetailModel: ProjectDetailModel;
  projectEditForm: ProjectEditForm;
  taskCreateForm: TaskCreateForm;
  taskDetailModel: TaskDetailModel;
  taskListModel: TaskListModel;
  taskEditForm: TaskEditForm;

  constructor() {
    this.userDetailModel = new UserDetailModel();
    this.projectDetailModel = new ProjectDetailModel();
    this.projectEditForm = new ProjectEditForm();
    this.taskCreateForm = new TaskCreateForm();
    this.taskDetailModel = new TaskDetailModel();
    this.taskListModel = new TaskListModel();
    this.taskEditForm = new TaskEditForm();
  }
}

const store = new ApplicationStore();

export default store;
