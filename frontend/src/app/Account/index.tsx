import { observer } from 'inferno-mobx';
import AccountView from './AccountView';
import AccountModel from './AccountModel';

export const accountModel = new AccountModel();

const Account = () => <AccountView {...accountModel} />;

export default observer(Account);
