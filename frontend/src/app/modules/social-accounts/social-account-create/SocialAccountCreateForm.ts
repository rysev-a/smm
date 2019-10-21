import Form from 'app/core/plugins/Form/Form';
import history from 'app/core/history';
import { socialAccountApi } from 'app/services/api';

class SocialAccountCreateForm extends Form {
  constructor() {
    super();
    this.values = this.getDefaultValues();
  }

  submit = socialAccountApi.list.post;

  onSuccessCallback = (_, response) => {
    const id = response.data.id;
    history.push(`/social-accounts/${id}`);
  };

  serializeValues = values => {
    return {
      login: values.login,
      password: values.password,
      social_network: values.social_network,
    };
  };

  getDefaultValues = () => ({
    login: '',
    password: '',
    social_network: 'vk',
  });
}

export default SocialAccountCreateForm;
