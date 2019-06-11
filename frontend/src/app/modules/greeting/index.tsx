import { observer } from 'inferno-mobx';
import { Link } from 'inferno-router';
import accountModel from '../account/AccountModel';

const GreetingView = observer(({ account }) => {
  if (account.processing) {
    return null;
  }

  if (account.isAuth) {
    return (
      <div className="greeting">
        Добро пожаловать, {account.data.first_name}
      </div>
    );
  }

  return (
    <Link to="/signin">
      <h2>Войти на сайт</h2>
    </Link>
  );
});

const Greeting = () => <GreetingView account={accountModel} />;

export default Greeting;
