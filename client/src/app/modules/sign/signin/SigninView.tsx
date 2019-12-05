import cc from 'classcat';
import Translate from 'app/core/plugins/Translate';
import { Link } from 'inferno-router';
import './Signin.sass';

const SigninView: any = ({
  signinModel: { handleChange, handleSubmit, handleBlur, errors },
}) => (
  <div className="container signin-form">
    <h1 className="sign-form__title">Вход</h1>
    <form className="sign-form">
      <div className="sign-form__fields">
        <div className="columns is-centered">
          <div className="column is-4">
            <div className={cc({ field: true, error: errors['email'] })}>
              <div className="label">Email</div>
              <div className="control">
                <input
                  className="input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  type="email"
                  placeholder="name@mail.com"
                />
              </div>
              {errors['email'] && (
                <div className="error-message">
                  <Translate>{errors['email']}</Translate>
                </div>
              )}
            </div>
          </div>
          <div className="column is-4">
            <div className={cc({ field: true, error: errors['password'] })}>
              <div className="label">Пароль</div>
              <div className="control password-control">
                <input
                  className="input"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                />
                <img className="eyes" src="./img/eyes.png" />
              </div>
              {errors['password'] && (
                <div className="error-message">
                  <Translate>{errors['password']}</Translate>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-4">
          <div className="sign-form__text">
            <span>Забыли пароль?</span>
            <a className="sign-form__link">Восстановить</a>
          </div>
          <div className="sign-form__buttons">
            <button className="button is-violet" onClick={handleSubmit}>
              Войти
            </button>
          </div>
          <div className="sign-form__text">
            <span>Ещё нет аккаунта?</span>
            <Link className="sign-form__link" to="/signup">
              Зарегистрируйтесь
            </Link>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default SigninView;
