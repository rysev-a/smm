import { Link } from 'inferno-router';
import { observer } from 'inferno-mobx';
import accountModel from 'app/modules/account/AccountModel';
import './AccountMenu.css';

const AccountMenuView = observer(({ account }) => {
  if (account.processing) {
    return null;
  }

  return (
    <div className="navbar-end account-menu">
      {account.isAuth && (
        <div
          className="navbar-item has-dropdown is-hoverable"
          id="account-dropdown">
          <a className="navbar-link">{account.data.email}</a>
          <div className="navbar-dropdown account-menu-dropdown">
            <Link className="navbar-item" to="/account/projects">
              Мои проекты
            </Link>
            <Link className="navbar-item" to="/account/settings">
              Настройки
            </Link>
            <div className="sign-menu">
              <a className="navbar-item" onClick={account.signout}>
                Выйти
              </a>
            </div>
          </div>
        </div>
      )}
      {!account.isAuth && (
        <>
          <Link className="navbar-item" to="/signin">
            Вход
          </Link>
          <Link className="navbar-item" to="/signup">
            Регистрация
          </Link>
        </>
      )}
    </div>
  );
});

const AccountMenu = () => <AccountMenuView account={accountModel} />;

export default AccountMenu;
