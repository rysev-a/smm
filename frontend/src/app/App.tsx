import 'bulma/css/bulma.min.css';
import 'normalize.css/normalize.css';
import '@fortawesome/fontawesome-free/css/all.css';

if (process.env.NODE_ENV !== 'production') {
  require('app/core/hmr');
}

import * as inferno from 'inferno';
import { Provider } from 'inferno-mobx';
import { Router, Route, Switch } from 'inferno-router';
import history from './core/history';
import store from './core/store';
import Header from 'app/modules/header';
import Dev from './modules/dev';
import { SecurityRedirect } from './modules/security/Security';

// pages
import Home from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import UserListPage from './pages/users/UserListPage';
import ProjectListPage from './pages/projects/ProjectListPage';
import ProjectCreatePage from './pages/projects/ProjectCreatePage';
import SignInPage from './pages/SignInPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import UserDetailPage from './pages/users/UserDetailPage';
import ProjectDetailPage from './pages/projects/ProjectDetailPage';
import ProjectEditPage from './pages/projects/ProjectEditForm';

inferno.render(
  <Provider store={store}>
    <Router history={history}>
      <Dev />
      <SecurityRedirect />
      <main>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/projects" exact component={ProjectListPage} />
        <Route path="/users/:userId" component={UserDetailPage} />
        <Route path="/users" exact component={UserListPage} />
        <Switch>
          <Route path="/projects/create" exact component={ProjectCreatePage} />
          <Route
            path="/projects/:projectId"
            exact
            component={ProjectDetailPage}
          />
          <Route
            path="/projects/:projectId/edit"
            exact
            component={ProjectEditPage}
          />
        </Switch>
        <Route path="/account/settings" component={AccountSettingsPage} />
      </main>
    </Router>
  </Provider>,

  document.getElementById('app')
);
