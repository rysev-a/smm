import { style } from 'typestyle';
import { Link } from 'inferno-router';
import classNames from 'classnames';

const TopNavigation = ({ account = { loaded: true, isAuth: true } }) =>
  account.loaded && (
    <div
      className={classNames(
        style({
          marginLeft: '30px',
        }),
        'navbar-menu'
      )}>
      <div
        className={classNames('navbar-item', {
          'has-dropdown is-hoverable': account.isAuth,
        })}
        id="project-dropdown">
        <Link
          to="/projects"
          className={account.isAuth ? 'navbar-link' : 'navbar-item'}>
          Проекты
        </Link>
        {account.isAuth && (
          <div className="navbar-dropdown">
            <div className="sign-menu">
              <Link to="/projects/create" className="navbar-item">
                Создать проект
              </Link>
            </div>
          </div>
        )}
      </div>

      <Link to="/users" className="navbar-item">
        Пользователи
      </Link>
    </div>
  );

export default TopNavigation;
