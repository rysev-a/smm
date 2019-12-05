import { inject, observer } from 'inferno-mobx';
import { withRouter } from 'inferno-router';
import SecurityRedirectView from './SecurityRedirectView';

const mapStateToProps = ({ store }) => {
  return { accountModel: store.accountModel };
};

export default withRouter(
  inject(mapStateToProps)(observer(SecurityRedirectView))
);
