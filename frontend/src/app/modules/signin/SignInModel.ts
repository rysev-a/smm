import { observable } from 'mobx';
import { validate } from 'app/core/utils/validators';
import { accountApi } from 'app/services';
import accountModel from 'app/modules/account/AccountModel';
import history from 'app/core/history';

interface SignInForm {
  email: string;
  password: string;
  handleChange(event): void;
  handleBlur(event): void;
  validateField(field): void;
  validate(): void;
  handleSubmit(event): void;
  onSuccess(): void;
  onError(error): void;
}

class SignInModel implements SignInForm {
  @observable email = '';
  @observable password = '';
  @observable errors = {};
  @observable isSubmitting = false;

  handleChange = e => {
    this[e.target.name] = e.target.value;
    this.resetFieldValidation(e.target.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    accountApi
      .signin({
        email: this.email,
        password: this.password,
      })
      .then(() => this.onSuccess())
      .catch(error => this.onError(error));
  };

  handleBlur = e => {
    const fieldName = e.target.name;
    this.validateField(fieldName);
  };

  validateField = field => {
    const value = this[field];
    this.errors = {
      ...this.errors,
      [`${field}`]: validate({ name: field, value }) || '',
    };
  };

  validate = () => {
    const validateFields = ['email'];
    validateFields.map(field => this.validateField(field));
  };

  onSuccess = () => {
    this.isSubmitting = false;

    accountModel.load(() => {
      history.push('/');
    });
  };

  onError = error => {
    const errors = error.response.data.message;
    this.errors = errors;
    this.isSubmitting = false;
  };

  resetFieldValidation = field => {
    this.errors = {
      ...this.errors,
      [field]: '',
    };
  };
}

const signInModel = new SignInModel();

export default signInModel;
