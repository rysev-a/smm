import { observable, computed } from 'mobx';
import { validate } from 'app/core/utils/validators';
import { accountApi } from 'app/services/api';
import history from 'app/core/history';
import AccountModel from 'app/modules/account/AccountModel';

interface SigninForm {
  values: {
    email: string;
    password: string;
  };
  accountModel: AccountModel;
  handleChange(event): void;
  handleBlur(event): void;
  validateField(field): void;
  validate(): void;
  handleSubmit(event): void;
  onSuccess(): void;
  onError(error): void;
}

class SigninModel implements SigninForm {
  @observable values = {
    email: '',
    password: '',
  };
  @observable errors = {};
  @observable isSubmitting = false;
  accountModel: AccountModel;

  constructor(accountModel: any) {
    this.accountModel = accountModel;
  }

  handleChange = e => {
    this.values[e.target.name] = e.target.value;
    this.resetFieldValidation(e.target.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.validate();

    if (this.isDisabled) {
      return false;
    }

    accountApi
      .signin({
        email: this.values.email,
        password: this.values.password,
      })
      .then(() => this.onSuccess())
      .catch(error => this.onError(error));
  };

  handleBlur = e => {
    const fieldName = e.target.name;
    this.validateField(fieldName);
  };

  validateField = field => {
    const value = this.values[field];
    this.errors = {
      ...this.errors,
      [`${field}`]: validate({ name: field, value }) || '',
    };
  };

  validate = () => {
    const validateFields = ['email'];
    validateFields.map(field => this.validateField(field));
  };

  @computed
  get isDisabled() {
    return Object.keys(this.errors).some((key: any) => this.errors[key]);
  }

  onSuccess = () => {
    this.isSubmitting = false;
    this.accountModel.load(() => {
      history.push('/account');
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

export default SigninModel;
