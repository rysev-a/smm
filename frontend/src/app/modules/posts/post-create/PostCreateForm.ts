import { observable } from 'mobx';
import Form from 'app/core/plugins/Form/Form';
import AsyncList from 'app/core/plugins/Form/AsyncList';
import history from 'app/core/history';
import { postApi, socialAccountApi } from 'app/services/api';
import { validate } from './validators';

class PostCreateForm extends Form {
  socialAccountOptions: AsyncList;

  constructor() {
    super();
    this.socialAccountOptions = new AsyncList(socialAccountApi);
    this.values = this.getDefaultValues();
  }

  validate = validate;
  submit = postApi.list.post;

  onSuccessCallback = () => history.push('/posts');

  getSocialAccountLabel = option => {
    return option.login;
  };
  loadSocialAccountOptions = () => {
    this.socialAccountOptions.load();
  };

  updateSocialAccount = socialAccount => {
    this.values.socialAccount = socialAccount;
  };

  serializeValues = values => {
    return {
      name: values.name,
      description: values.description,
      content: values.content,
    };
  };

  getDefaultValues = () => ({
    name: '',
    description: '',
    content: '',
    socialAccount: {},
  });
}

export default PostCreateForm;
