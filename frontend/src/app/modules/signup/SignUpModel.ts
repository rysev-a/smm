import { observable } from 'mobx';
import { validate } from 'app/core/utils/validators';
import { accountApi } from 'app/services';
import accountModel from '../account/AccountModel';
import history from 'app/core/history';

export interface SignUpForm {
  // actions
  handleChange(e): void;
  handleSubmit(e): void;
  handleBlur(e): void;
  onSuccess(): void;
  onError(response): void;
  validateField(field): void;
  validate(): void;

  resetFieldValidation(field): void;
  reset(): void;

  // data
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  isSubmitting: boolean;
  errors: {};
}

class SignUpModel implements SignUpForm {
  @observable first_name = '';
  @observable last_name = '';
  @observable email = '';
  @observable password = '';
  @observable isSubmitting = false;
  @observable errors = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  };

  handleChange = e => {
    this[e.target.name] = e.target.value;
    this.resetFieldValidation(e.target.name);
  };

  handleBlur = e => {
    const fieldName = e.target.name;
    this.validateField(fieldName);
  };

  handleSubmit = e => {
    e.preventDefault();

    accountApi
      .signup(this.serialize())
      .then(() => {
        this.onSuccess();
      })
      .catch(({ response }) => {
        this.onError(response);
      });
  };

  reset = () => {
    this.email = '';
    this.password = '';
    this.first_name = '';
    this.last_name = '';
  };

  resetFieldValidation = field => {
    this.errors = {
      ...this.errors,
      [field]: '',
    };
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

  serialize = () => {
    return {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
    };
  };

  onError = response => {
    this.isSubmitting = false;

    const {
      data: { message },
    } = response;

    this.errors = {
      ...this.errors,
      ...message,
    };
  };

  onSuccess = () => {
    this.isSubmitting = false;
    this.reset();
    accountModel.load(() => {
      history.push('/');
    });
  };
}

const signUpModel = new SignUpModel();

export default signUpModel;
