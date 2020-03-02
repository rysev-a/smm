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

// social accounts
import SocialAccountListModel from 'app/modules/social-accounts/social-account-list/SocialAccountListModel';
import SocialAccountDetailModel from 'app/modules/social-accounts/social-account-detail/SocialAccountDetailModel';
import SocialAccountCreateForm from 'app/modules/social-accounts/social-account-create/SocialAccountCreateForm';
import SocialAccountEditForm from 'app/modules/social-accounts/social-account-edit/SocialAccountEditForm';

// main panel
import PanelModel from 'app/modules/panel/PanelModel';

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
  socialAccountListModel: SocialAccountListModel;
  socialAccountDetailModel: SocialAccountDetailModel;
  socialAccountCreateForm: SocialAccountCreateForm;
  socialAccountEditForm: SocialAccountEditForm;
  panelModel: PanelModel;

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
    this.socialAccountListModel = new SocialAccountListModel();
    this.socialAccountDetailModel = new SocialAccountDetailModel();
    this.socialAccountCreateForm = new SocialAccountCreateForm();
    this.socialAccountEditForm = new SocialAccountEditForm();
    this.panelModel = new PanelModel();
  }
}

const store = new ApplicationStore();

export default store;
