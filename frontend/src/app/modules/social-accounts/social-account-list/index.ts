import { inject, observer } from 'inferno-mobx';
import SocialAccountListView from './SocialAccountListView';

export default inject(({ store }) => ({
  socialAccountList: store.socialAccountListModel,
}))(observer(SocialAccountListView));
