import { withRouter } from 'inferno-router';
import accountModel from '../account/AccountModel';
import { observer } from 'inferno-mobx';

export const SecurityRedirectView = ({
  accountModel,
  location: { pathname },
  history,
}) => {
  const authPages = ['/projects/create', '/projects', '/users'];
  const anonymusPages = ['/signin', '/signup'];

  if (accountModel.loaded === false) {
    return null;
  }

  if (accountModel.isAuth === false) {
    if (authPages.includes(pathname)) {
      history.push('/signin');
    }
  }

  if (accountModel.isAuth) {
    if (anonymusPages.includes(pathname)) {
      history.push('/');
    }
  }

  return null;
};

const SecurityRedirectObservable = observer(SecurityRedirectView);

export const SecurityRedirect = withRouter(({ location, history }) => (
  <SecurityRedirectObservable
    location={location}
    accountModel={accountModel}
    history={history}
  />
));
