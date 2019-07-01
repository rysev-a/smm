import { observable, action } from 'mobx';
import { projectApi } from 'app/services/api';
import history from 'app/core/history';

const defaultProjectDetailData = () => ({
  id: 0,
  name: '',
  description: '',
  creator: {},
  users: [],
});

class ProjectDetailModel {
  @observable loaded = false;
  @observable processing = false;
  @observable data = defaultProjectDetailData();
  @observable projectId = 0;

  @action.bound
  getProjectId({
    match: {
      params: { projectId },
    },
  }: any) {
    this.projectId = projectId;
  }

  @action.bound
  load() {
    this.processing = true;

    projectApi.detail
      .get(this.projectId)
      .then(this.onSuccess)
      .catch(() => {
        this.processing = false;
      });
  }

  @action.bound
  onSuccess({ data }) {
    this.data = data;
    this.loaded = true;
    this.processing = false;
  }

  @action.bound
  editProject() {
    history.push(`/projects/${this.data.id}/edit`);
  }

  @action.bound
  reset() {
    this.data = defaultProjectDetailData();
    this.loaded = false;
  }
}

export default ProjectDetailModel;
