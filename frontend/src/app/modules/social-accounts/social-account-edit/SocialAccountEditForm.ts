import { observable } from 'mobx';
import Form from 'app/core/plugins/Form/Form';
import history from 'app/core/history';
import { socialAccountApi } from 'app/services/api';

class SocialAccountEditForm extends Form {
  constructor() {
    super();
    this.values = this.getDefaultValues();
  }

  @observable socialAccountId = 0;

  submit = values => {
    return socialAccountApi.detail.put({ id: this.socialAccountId, values });
  };

  load = socialAccountId => {
    this.errors = {};
    this.socialAccountId = socialAccountId;
    this.processing = true;

    socialAccountApi.detail
      .get(socialAccountId)
      .then(({ data }) => {
        this.values = data;
        this.processing = false;
      })
      .catch(() => {
        this.processing = false;
        console.warn('load fail');
      });
  };

  onSuccessCallback = (_, response) => {
    const { id } = response.data;
    history.push(`/social-accounts/${id}`);
  };

  serializeValues = values => {
    return {
      login: values.login,
      password: values.password,
      token: values.token,
      social_network: values.social_network,
    };
  };

  getDefaultValues = () => ({
    login: '',
    password: '',
    token: '',
    social_network: '',
  });
}

export default SocialAccountEditForm;
