import { observable, computed } from 'mobx';
import history from 'app/core/history';
import { validate } from 'app/core/utils/validators';
import { accountApi } from 'app/services/api';
import AccountModel from 'app/modules/account/AccountModel';

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
    email: string;
    phone: string;
    password: string;
    passwordConfirm: string;
  };

  accountModel: AccountModel;
  isSubmitting: boolean;
  errors: {};
}

export default class SignUpModel implements SignUpForm {
  @observable values = {
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
  };
  @observable isSubmitting = false;
  @observable errors = {
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
  };

  accountModel: AccountModel;

  constructor(accountModel: AccountModel) {
    this.accountModel = accountModel;
  }

  defaultSignUpValues = () => {
    return {
      email: '',
      phone: '',
      password: '',
      passwordConfirm: '',
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
    const validateFields = ['email', 'password'];
    validateFields.map(field => this.validateField(field));
  };

  serialize = () => {
    return {
      email: this.values.email,
      password: this.values.password,
      phone: this.values.phone,
    };
  };

  validatePasswordConfirm = e => {
    const passwordConfirm = e.target.value;

    if (passwordConfirm !== this.values.password) {
      this.errors['passwordConfirm'] = 'PASSWORD_CONFIRM_ERROR';
    }
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
    this.accountModel.load(() => {
      history.push('/account');
    });
  };
}
