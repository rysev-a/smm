import { Provider } from 'inferno-mobx';
import { Router, Route } from 'inferno-router';
import history from './core/history';
import store from './core/store';
import StartPage from './pages/landing/StartPage';
import SigninPage from './pages/sign/SigninPage';
import SignupPage from './pages/sign/SignupPage';
import AccountPage from './pages/account/AccountPage';

import SecurityRedirect from './modules/security/SecurityRedirect';

const App: any = () => (
  <Provider store={store}>
    <Router history={history}>
      <SecurityRedirect />
      <main>
        <Route path="/" exact component={StartPage} />
        <Route path="/signin" exact component={SigninPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/account" exact component={AccountPage} />
      </main>
    </Router>
  </Provider>
);

export default App;
