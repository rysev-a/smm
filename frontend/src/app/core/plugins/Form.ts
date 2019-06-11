import { observable } from 'mobx';
import { validate } from 'app/core/utils/validators';

interface FormModel {
  // actions
  handleChange(e): void;
  handleBlur(e): void;
  validateField(field): void;
  validate(): void;
  resetFieldValidation(field): void;

  // data
  isSubmitting: boolean;
  errors: {};
}

class Form implements FormModel {
  @observable isSubmitting = false;
  @observable errors = {};

  handleChange = e => {
    this[e.target.name] = e.target.value;
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
}
