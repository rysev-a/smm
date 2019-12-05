import { inject, observer } from 'inferno-mobx';
import AccountView from './AccountView';

export default inject(({ store }) => ({
  accountModel: store.accountModel,
}))(observer(AccountView));
