import { Link } from 'inferno-router';
import './StartPage.sass';

const StartPage = () => (
  <div className="container">
    <div className="main-banner">
      <h1 className="main-banner__title">SMM service</h1>
      <div className="main-banner__buttons">
        <Link className="button is-orange" to="/signup">
          Регистрация
        </Link>
        <Link className="button is-violet" to="/signin">
          Вход
        </Link>
      </div>
    </div>
  </div>
);

export default StartPage;
