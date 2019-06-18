import UserDetailModel from 'app/modules/users/user-detail/UserDetailModel';
import ProjectDetailModel from 'app/modules/projects/project-detail/ProjectDetailModel';

class ApplicationStore {
  userDetailModel: UserDetailModel;
  projectDetailModel: ProjectDetailModel;

  constructor() {
    this.userDetailModel = new UserDetailModel();
    this.projectDetailModel = new ProjectDetailModel();
  }
}

const store = new ApplicationStore();

export default store;
