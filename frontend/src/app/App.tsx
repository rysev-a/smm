import 'bulma/css/bulma.min.css';

import * as inferno from 'inferno';
import { Router, Route } from 'inferno-router';
import history from './core/history';
import Header from 'app/modules/header';

// pages
import Home from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import ProjectListPage from './pages/ProjectListPage';
import UserListPage from './pages/UserListPage';
import ProjectCreatePage from './pages/ProjectCreatePage';
import SignInPage from './pages/SignInPage';
import AccountSettingsPage from './pages/AccountSettingsPage';

inferno.render(
  <Router history={history}>
    <main>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/projects/create" exact component={ProjectCreatePage} />
      <Route path="/projects" exact component={ProjectListPage} />
      <Route path="/users" component={UserListPage} />
      <Route path="/account/settings" component={AccountSettingsPage} />
    </main>
  </Router>,
  document.getElementById('app')
);
