import { observable, computed } from 'mobx';
import { accountApi } from 'app/services';
import { validate } from 'app/core/utils/validators';

interface AccountSettingsForm {
  data: {};
  errors: {};
  isSubmitting: boolean;
}

const defaultAccountData = () => ({
  email: 'default',
  first_name: '',
  last_name: '',
});

class AccountSettingsModel implements AccountSettingsForm {
  @observable data = defaultAccountData();
  @observable isSubmitting = false;
  @observable errors = {
    email: '',
    first_name: '',
    last_name: '',
  };

  @computed
  get isDisabled() {
    return Object.keys(this.data).some((key: any) => this.errors[key]);
  }

  initialize = ({ email, first_name, last_name }) => {
    this.data = {
      email,
      last_name,
      first_name,
    };
  };

  handleChange = e => {
    this.data = {
      ...this.data,
      [e.target.name]: e.target.value,
    };

    this.resetFieldValidation(e.target.name);
  };

  handleBlur = e => {
    const fieldName = e.target.name;
    this.validateField(fieldName);
  };

  handleSubmit = e => {
    e.preventDefault();

    this.validate();

    if (this.isDisabled) {
      return false;
    }

    accountApi
      .update(this.data)
      .then(() => {
        this.onSuccess();
      })
      .catch(({ response }) => {
        this.onError(response);
      });
  };

  reset = () => {
    this.data = defaultAccountData();
  };

  resetFieldValidation = field => {
    this.errors = {
      ...this.errors,
      [field]: '',
    };
  };

  validateField = field => {
    const value = this.data[field];
    this.errors = {
      ...this.errors,
      [`${field}`]: validate({ name: field, value }) || '',
    };
  };

  validate = () => {
    const validateFields = ['email', 'first_name', 'last_name'];
    validateFields.map(field => this.validateField(field));
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

  syncAccountModel = null;

  onSuccess = () => {
    this.isSubmitting = false;
    this.syncAccountModel(this.data);
  };
}

const accountSettings = new AccountSettingsModel();

export default accountSettings;
