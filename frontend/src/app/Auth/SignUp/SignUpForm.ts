import { observable } from 'mobx';
import { accountModel } from '../../Account';

export interface SignUpFormData {
  // actions
  updateEmail(e): void;
  updatePassword(e): void;
  submit(): void;
  reset(): void;

  // data
  email: string;
  password: string;
}

class SignUpForm implements SignUpFormData {
  @observable email = '';
  @observable password = '';

  updateEmail = e => {
    this.email = e.target.value;
  };
  updatePassword = e => {
    this.password = e.target.value;
  };

  submit = () => {
    accountModel.updateEmail(this.email);
    accountModel.updatePassword(this.password);
  };

  reset = () => {
    this.email = '';
    this.password = '';
  };
}

const signUpForm = new SignUpForm();

export default signUpForm;
