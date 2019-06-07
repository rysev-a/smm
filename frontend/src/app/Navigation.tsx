import { Link } from 'inferno-router';

const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/signup">SignUp</Link>
  </nav>
);

export default Navigation;
