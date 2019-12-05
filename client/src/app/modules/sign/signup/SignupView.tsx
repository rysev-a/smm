import { Link } from 'inferno-router';
import cc from 'classcat';
import Translate from 'app/core/plugins/Translate';
import './Signup.sass';

const SignupView: any = ({
  signupModel: {
    handleChange,
    handleSubmit,
    handleBlur,
    validatePasswordConfirm,
    errors,
  },
}) => (
  <div className="container signup-form">
    <h1 className="sign-form__title">Регистрация</h1>
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
        <div className="columns is-centered">
          <div className="column is-4">
            <div className="field">
              <div className="label phone-label">
                <span className="label-main">Телефон</span>
                <span className="label-info">не обязательно</span>
              </div>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="+7 900 000 00 00"
                  name="phone"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div
              className={cc({ field: true, error: errors['passwordConfirm'] })}>
              <div className="label">Повтор пароля</div>
              <div className="control password-control">
                <input
                  onChange={handleChange}
                  onBlur={validatePasswordConfirm}
                  name="passwordConfirm"
                  className="input"
                  type="password"
                />
                <img className="eyes look-back" src="./img/eyes.png" />
              </div>

              {errors['passwordConfirm'] && (
                <div className="error-message">
                  <Translate>{errors['passwordConfirm']}</Translate>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-8">
          <div className="sign-form__text">
            <span>Нажимая кнопку "Зарегистрироваться", Вы соглашаетесь с</span>
            <br />
            <a className="sign-form__link" href="/signup-info.html">
              условиями передачи персональных данных
            </a>
            <span>в SMM service</span>
          </div>
          <div className="sign-form__buttons">
            <a className="button is-orange noselect" onClick={handleSubmit}>
              Зарегистрироваться
            </a>
          </div>
          <div className="sign-form__text">
            <span>У меня уже есть аккаунт</span>
            <Link className="sign-form__link noselect" to="/signin">
              Войти
            </Link>
          </div>
        </div>
      </div>
    </form>
  </div>
);

const SignupView2 = props => {
  console.log(props);
  return <div>ok</div>;
};

export default SignupView;
