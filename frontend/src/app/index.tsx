import * as inferno from 'inferno';
import { BrowserRouter, Route } from 'inferno-router';

import 'bulma/css/bulma.min.css';

import Home from './Home';
import Navigation from './navigation';
import SignUpPage from './pages/SignUpPage';

inferno.render(
  <BrowserRouter>
    <main>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={SignUpPage} />
    </main>
  </BrowserRouter>,
  document.getElementById('app')
);
