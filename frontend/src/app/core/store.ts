import UserDetailModel from 'app/modules/users/user-detail/UserDetailModel';
import ProjectDetailModel from 'app/modules/projects/project-detail/ProjectDetailModel';
import ProjectEditForm from 'app/modules/projects/project-edit/ProjectEditForm';

class ApplicationStore {
  userDetailModel: UserDetailModel;
  projectDetailModel: ProjectDetailModel;
  projectEditForm: ProjectEditForm;

  constructor() {
    this.userDetailModel = new UserDetailModel();
    this.projectDetailModel = new ProjectDetailModel();
    this.projectEditForm = new ProjectEditForm();
  }
}

const store = new ApplicationStore();

export default store;
