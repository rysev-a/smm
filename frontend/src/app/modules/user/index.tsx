import { observable } from 'mobx';
import { observer } from 'inferno-mobx';
import accountModel from '../account/AccountModel';

const UserView = observer(({ account }) => (
  <div>
    <span>user email</span>
    <span>{account.data.email}</span>
    <div className="buttons">
      <a className="button is-primary" onClick={account.load}>
        update
      </a>
    </div>
  </div>
));

const User = () => <UserView account={accountModel} />;

export default User;
