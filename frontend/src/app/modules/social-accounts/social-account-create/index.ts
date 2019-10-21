import { withRouter } from 'inferno-router';
import { inject, observer } from 'inferno-mobx';
import SocialAccountCreateView from './SocialAccountCreateView';

const SocialAccountCreate = withRouter(
  inject(({ store }) => ({
    socialAccountCreateForm: store.socialAccountCreateForm,
  }))(observer(SocialAccountCreateView))
);

export default SocialAccountCreate;
