import { observable, computed } from 'mobx';
import { validate } from 'app/core/utils/validators';

interface FormModel {
  // actions
  handleChange(e): void;
  handleBlur(e): void;
  validateField(field): void;
  validate(): void;
  resetFieldValidation(field): void;
  submit(values): any;

  // data
  processing: boolean;
  values: {};
  errors: {};
}

class Form implements FormModel {
  @observable processing = false;
  @observable errors = {};
  @observable values = {};

  handleChange = e => {
    this.values[e.target.name] = e.target.value;
    this.resetFieldValidation(e.target.name);
  };

  handleBlur = e => {
    const fieldName = e.target.name;
    this.validateField(fieldName);
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
    Object.keys(this.values).map(field => this.validateField(field));
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

    this.processing = true;
    this.submit(this.serializeValues(this.values))
      .then(response => {
        this.onSuccess(response);
      })
      .catch(({ response }) => {
        this.onError(response);
      });
  };

  onError = response => {
    this.processing = false;

    const {
      data: { message },
    } = response;

    this.errors = {
      ...this.errors,
      ...message,
    };
  };

  onSuccess = response => {
    this.processing = false;

    if (typeof this.onSuccessCallback === 'function') {
      this.onSuccessCallback(this.values, response);
    }
  };

  reset = () => {
    this.values = this.getDefaultValues();
  };

  getDefaultValues = null;
  submit = null;
  onSuccessCallback = null;
  serializeValues = null;
}

export default Form;
