// users
import SigninModel from 'app/modules/sign/signin/SigninModel';
import SignupModel from 'app/modules/sign/signup/SignupModel';
import AccountModel from 'app/modules/account/AccountModel';

class ApplicationStore {
  signinModel: SigninModel;
  signupModel: SignupModel;
  accountModel: AccountModel;

  constructor() {
    this.accountModel = new AccountModel();
    this.signupModel = new SignupModel(this.accountModel);
    this.signinModel = new SigninModel(this.accountModel);
  }

  loadAccount() {
    this.accountModel.load(null);
  }
}

const store = new ApplicationStore();

export default store;
