import { observable, action } from 'mobx';
import { userApi } from 'app/services/api';

const defaultUserDetailData = () => ({
  email: '',
  phone: '',
  first_name: '',
  last_name: '',
});

class UserDetailModel {
  @observable loaded = false;
  @observable processing = false;
  @observable data = defaultUserDetailData();
  @observable userId = 0;

  @action.bound
  getUserId({
    match: {
      params: { userId },
    },
  }: any) {
    this.userId = userId;
  }

  @action.bound
  load() {
    this.processing = true;

    userApi.detail
      .get(this.userId)
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
  reset() {
    this.data = defaultUserDetailData();
  }
}

export default UserDetailModel;
