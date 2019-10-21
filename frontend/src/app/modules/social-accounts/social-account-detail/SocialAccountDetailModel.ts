import { observable, action } from 'mobx';
import { socialAccountApi } from 'app/services/api';
import history from 'app/core/history';

const defaultSocialAccountDetailData = () => ({
  id: 0,
  login: '',
  password: '',
  token: '',
  social_network: '',
});

class TaskDetailModel {
  @observable loaded = false;
  @observable processing = false;
  @observable data = defaultSocialAccountDetailData();

  @action.bound
  load(socialAccountId) {
    this.processing = true;

    socialAccountApi.detail
      .get(socialAccountId)
      .then(response => {
        this.onSuccess(response);
      })
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
  edit() {
    history.push(`/social-accounts/${this.data.id}/edit`);
  }

  @action.bound
  reset() {
    this.data = defaultSocialAccountDetailData();
    this.loaded = false;
  }

  @action.bound
  getToken() {
    socialAccountApi.getToken(this.data.id).then(({ data: { url } }) => {
      window.open(url);
    });
  }
}

export default TaskDetailModel;
