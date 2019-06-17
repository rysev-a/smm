import { observable, computed } from 'mobx';
import { accountApi } from 'app/services';
import { validate } from 'app/core/utils/validators';

interface AccountSettingsForm {
  values: {};
  errors: {};
  isSubmitting: boolean;
}

const defaultAccountValues = () => ({
  email: '',
  first_name: '',
  last_name: '',
});

class AccountSettingsModel implements AccountSettingsForm {
  @observable values = defaultAccountValues();
  @observable isSubmitting = false;
  @observable errors = {
    email: '',
    first_name: '',
    last_name: '',
  };

  @computed
  get isDisabled() {
    return Object.keys(this.errors).some((key: any) => this.errors[key]);
  }

  initialize = ({ email, first_name, last_name }) => {
    this.values = {
      email,
      last_name,
      first_name,
    };
  };

  handleChange = e => {
    this.values = {
      ...this.values,
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
      .update(this.values)
      .then(() => {
        this.onSuccess();
      })
      .catch(({ response }) => {
        this.onError(response);
      });
  };

  reset = () => {
    this.values = defaultAccountValues();
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
    this.syncAccountModel(this.values);
  };
}

const accountSettings = new AccountSettingsModel();

export default accountSettings;
