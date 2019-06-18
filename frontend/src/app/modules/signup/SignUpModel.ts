import { observable, computed } from 'mobx';
import history from 'app/core/history';
import { validate } from 'app/core/utils/validators';
import { accountApi } from 'app/services/api';
import accountModel from '../account/AccountModel';

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
  values: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  };

  isSubmitting: boolean;
  errors: {};
}

class SignUpModel implements SignUpForm {
  @observable values = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  };
  @observable isSubmitting = false;
  @observable errors = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  };

  defaultSignUpValues = () => {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
  };

  handleChange = e => {
    this.values[e.target.name] = e.target.value;
    this.resetFieldValidation(e.target.name);
  };

  handleBlur = e => {
    const fieldName = e.target.name;
    this.validateField(fieldName);
  };

  @computed
  get isDisabled() {
    return Object.keys(this.errors).some((key: any) => this.errors[key]);
  }

  handleSubmit = e => {
    e.preventDefault();

    this.validate();

    if (this.isDisabled) {
      return false;
    }

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
    this.values = this.defaultSignUpValues();
  };

  resetFieldValidation = field => {
    this.errors = {
      ...this.errors,
      [field]: '',
    };
  };

  validateField = field => {
    const value = this.values[field];
    this.errors = {
      ...this.errors,
      [`${field}`]: validate({ name: field, value }) || '',
    };
  };

  validate = () => {
    const validateFields = ['email', 'first_name', 'last_name', 'password'];
    validateFields.map(field => this.validateField(field));
  };

  serialize = () => {
    return {
      first_name: this.values.first_name,
      last_name: this.values.last_name,
      email: this.values.email,
      password: this.values.password,
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
