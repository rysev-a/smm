const SecurityRedirectView = ({
  accountModel,
  location: { pathname },
  history,
}) => {
  const authPages = ['/projects/create', '/projects', '/users', '/account'];
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
      history.push('/account');
    }
  }

  return null;
};

export default SecurityRedirectView;
