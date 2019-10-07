// users
import UserDetailModel from 'app/modules/users/user-detail/UserDetailModel';

// projects
import ProjectDetailModel from 'app/modules/projects/project-detail/ProjectDetailModel';
import ProjectEditForm from 'app/modules/projects/project-edit/ProjectEditForm';

// tasks
import TaskCreateForm from 'app/modules/tasks/task-create/TaskCreateForm';
import TaskDetailModel from 'app/modules/tasks/task-detail/TaskDetailModel';
import TaskListModel from 'app/modules/tasks/task-list/TaskListModel';
import TaskEditForm from 'app/modules/tasks/task-edit/TaskEditForm';

// comments
import CommentListModel from 'app/modules/comments/comment-list/CommentListModel';

// logging
import LoggingModel from 'app/modules/logging/LoggingModel';

// posts
import PostCreateForm from 'app/modules/posts/post-create/PostCreateForm';

class ApplicationStore {
  userDetailModel: UserDetailModel;
  projectDetailModel: ProjectDetailModel;
  projectEditForm: ProjectEditForm;
  taskCreateForm: TaskCreateForm;
  taskDetailModel: TaskDetailModel;
  taskListModel: TaskListModel;
  taskEditForm: TaskEditForm;
  commentListModel: CommentListModel;
  loggingModel: LoggingModel;
  postCreateForm: PostCreateForm;

  constructor() {
    this.userDetailModel = new UserDetailModel();
    this.projectDetailModel = new ProjectDetailModel();
    this.projectEditForm = new ProjectEditForm();
    this.taskCreateForm = new TaskCreateForm();
    this.taskDetailModel = new TaskDetailModel();
    this.taskListModel = new TaskListModel();
    this.taskEditForm = new TaskEditForm();
    this.commentListModel = new CommentListModel();
    this.loggingModel = new LoggingModel();
    this.postCreateForm = new PostCreateForm();
  }
}

const store = new ApplicationStore();

export default store;
