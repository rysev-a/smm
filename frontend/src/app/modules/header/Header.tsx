import { Link } from 'inferno-router';
import { style } from 'typestyle';
import classNames from 'classnames';
import TopNavigation from './components/TopNavigation';
import AccountMenu from './components/AccountMenu';
import accountModel from '../account/AccountModel';

const Header = () => (
  <header
    className={style({
      borderBottom: '1px solid #e6eaee',
    })}>
    <div className="container">
      <nav className="navbar">
        <Link
          to="/"
          className={classNames(
            'navbar-brand',
            'is-size-4',
            style({
              display: 'flex',
              alignItems: 'center',
            })
          )}>
          SMM
        </Link>
        <TopNavigation />
        <AccountMenu />
      </nav>
    </div>
  </header>
);

Header.defaultHooks = {
  onComponentDidMount() {
    accountModel.load();
  },
};

export default Header;
