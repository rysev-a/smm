import { observer } from 'inferno-mobx';
import accountSettingsForm from './AccounSettingsForm';
import AccountSettingsView from './AccountSettingsView';

const AccountSettingsObservedView = observer(AccountSettingsView);

const AccountSettings = () => (
  <AccountSettingsObservedView account={accountSettingsForm} />
);

export default AccountSettings;
