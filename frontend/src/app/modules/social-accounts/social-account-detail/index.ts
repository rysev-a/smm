import { withRouter } from 'inferno-router';
import { inject, observer } from 'inferno-mobx';
import SocialAccountDetailView from './SocialAccountDetailView';

export default withRouter(
  inject(({ store }) => ({
    socialAccountDetailModel: store.socialAccountDetailModel,
  }))(observer(SocialAccountDetailView))
);
