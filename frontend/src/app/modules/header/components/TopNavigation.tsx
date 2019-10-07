import { style } from 'typestyle';
import { Link } from 'inferno-router';
import classNames from 'classnames';
import accountModel from 'app/modules/account/AccountModel';
import { observer } from 'inferno-mobx';

const TopNavigation = observer(
  ({ account = { loaded: true, isAuth: true } }) =>
    account.isAuth && (
      <div
        className={classNames(
          style({
            marginLeft: '30px',
          }),
          'navbar-menu'
        )}>
        <div
          className="navbar-item has-dropdown is-hoverable"
          id="project-dropdown">
          <Link to="/projects" className="navbar-link">
            Проекты
          </Link>

          <div className="navbar-dropdown">
            <div className="sign-menu">
              <Link to="/projects/create" className="navbar-item">
                Создать проект
              </Link>
            </div>
          </div>
        </div>

        <div
          className="navbar-item has-dropdown is-hoverable"
          id="task-dropdown">
          <Link to="/tasks" className="navbar-link">
            Задачи
          </Link>

          <div className="navbar-dropdown">
            <div className="sign-menu">
              <Link to="/tasks/create" className="navbar-item">
                Создать задачу
              </Link>
            </div>
          </div>
        </div>

        <div
          className="navbar-item has-dropdown is-hoverable"
          id="task-dropdown">
          <Link to="/posts" className="navbar-link">
            Посты
          </Link>

          <div className="navbar-dropdown">
            <div className="post-create-item">
              <Link to="/posts/create" className="navbar-item">
                Создать пост
              </Link>
            </div>
          </div>
        </div>

        <Link to="/users" className="navbar-item">
          Пользователи
        </Link>

        <Link to="/logging" className="navbar-item">
          Действия
        </Link>
      </div>
    )
);

export default () => <TopNavigation account={accountModel} />;
