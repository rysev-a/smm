import { observable } from 'mobx';

interface AccountModelData {
  email: string;
  password: string;
  updateEmail(email): void;
  updatePassword(password): void;
}

class AccountModel implements AccountModelData {
  @observable email = '';
  @observable password = '';
  updateEmail = email => {
    console.log('update email', email);
    this.email = email;
  };

  updatePassword = password => {
    this.password = password;
  };
}

export default AccountModel;
