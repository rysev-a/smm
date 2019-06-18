import { observable } from 'mobx';
import { accountApi } from 'app/services/api';
import history from 'app/core/history';
import accountSettings from '../account-settings/AccounSettingsForm';

interface AccountModelData {
  data: {};
  processing: boolean;
  loaded: boolean;
  isAuth: boolean;

  load(callback): void;
  signout(): void;
}

const defaultAccountData = () => ({
  email: '',
  first_name: '',
  last_name: '',
});

class AccountModel implements AccountModelData {
  @observable data = defaultAccountData();
  @observable processing = false;
  @observable isAuth = false;
  @observable loaded = false;

  load = (callback = null) => {
    this.processing = true;

    accountApi
      .load()
      .then(({ data }) => {
        this.data = {
          ...data,
        };
        this.isAuth = true;
        this.loaded = true;
        this.processing = false;
        this.initializeAccountFormSettings();

        if (typeof callback === 'function') {
          callback();
        }
      })
      .catch(() => {
        this.loaded = true;
        this.processing = false;
        this.isAuth = false;
      });
  };

  signout = () => {
    this.processing = true;

    accountApi
      .signout()
      .then(() => {
        this.processing = false;
        this.reset();
        history.push('/');
      })
      .catch(() => {
        this.processing = false;
        this.reset();
      });
  };

  reset = () => {
    this.data = defaultAccountData();
    this.isAuth = false;
  };

  initializeAccountFormSettings() {
    accountSettings.initialize(this.data);
    accountSettings.syncAccountModel = data => {
      this.data = data;
    };
  }
}

const accountModel = new AccountModel();

export default accountModel;
