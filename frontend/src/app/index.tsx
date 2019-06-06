import * as inferno from 'inferno';
import { BrowserRouter, Route } from 'inferno-router';

import 'bulma/css/bulma.min.css';

const container = document.getElementById('app');
inferno.render(<h1>SMM manager</h1>, container);
