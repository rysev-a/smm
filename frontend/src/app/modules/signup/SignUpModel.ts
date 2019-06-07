import { observable } from 'mobx';

export interface SignUpForm {
  // actions
  handleChange(e): void;
  handleSubmit(e): void;
  handleBlur(): void;
  reset(): void;

  // data
  email: string;
  password: string;
  isSubmitting: boolean;
  errors: {};
}

class SignUpModel implements SignUpForm {
  @observable email = '';
  @observable password = '';
  @observable isSubmitting = false;
  @observable errors = {};

  handleChange = e => {
    this[e.target.name] = e.target.value;
  };

  handleBlur = () => {
    console.log('validate');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('password', this.password);
  };

  reset = () => {
    console.log('reset');
  };
}

const signUpModel = new SignUpModel();

export default signUpModel;
