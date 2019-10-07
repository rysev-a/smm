import Form from 'app/core/plugins/Form/Form';
import history from 'app/core/history';
import { postApi } from 'app/services/api';
import { validate } from './validators';

class PostCreateForm extends Form {
  constructor() {
    super();
    this.values = this.getDefaultValues();
  }

  validate = validate;
  submit = postApi.list.post;

  onSuccessCallback = () => history.push('/posts');

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
  });
}

export default PostCreateForm;
