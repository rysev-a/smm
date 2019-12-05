import { Link } from 'inferno-router';
import './TopControls.sass';

const TopControls = () => (
  <div className="top-controls">
    <Link className="go-back" to="/">
      <img src="/img/go-back.png" />
    </Link>
    <a className="show-info">
      <img src="/img/info.png" />
    </a>
  </div>
);

export default TopControls;
