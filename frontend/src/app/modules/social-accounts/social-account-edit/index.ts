import { withRouter } from 'inferno-router';
import { inject, observer } from 'inferno-mobx';
import SocialAccountEditView from './SocialAccountEditView';

export default withRouter(
  inject(({ store }) => ({
    socialAccountEditForm: store.socialAccountEditForm,
  }))(observer(SocialAccountEditView))
);
