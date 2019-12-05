import * as inferno from 'inferno';
import store from 'app/core/store';

import App from './App';
import '../styles/main.sass';
import '../styles/grid.sass';
import '../styles/form/sign-form.sass';
import '../styles/buttons.sass';
import '../styles/fonts/montserrat-black.css';
import '../styles/fonts/montserrat-medium.css';
import '../styles/fonts/montserrat-bold.css';
import 'normalize.css/normalize.css';

store.loadAccount();
inferno.render(<App />, document.getElementById('app'));
