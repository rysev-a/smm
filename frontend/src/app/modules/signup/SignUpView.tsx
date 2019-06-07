import Processing from 'app/ui/Processing';
import classNames from 'classnames';

const SignUpVuew = ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
}) => (
  <div className="level">
    <div className="level-item">
      <section className="section">
        <div className="level">
          <h2 className="is-size-4 is-center level-item">Регистрация</h2>
        </div>
        <form className="signin-form" onSubmit={handleSubmit}>
          <Processing processing={isSubmitting} />

          <div className="field">
            <label className="label">Имя</label>
            <div className="control">
              <input
                className={classNames('input', {
                  'is-danger': errors['first_name'],
                })}
                type="text"
                name="first_name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors['first_name'] && (
                <p className="help is-danger">{errors['first_name']}</p>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label">Фамилия</label>
            <div className="control">
              <input
                className={classNames('input', {
                  'is-danger': errors['last_name'],
                })}
                type="text"
                name="last_name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors['last_name'] && (
                <p className="help is-danger">{errors['last_name']}</p>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className={classNames('input', {
                  'is-danger': errors['email'],
                })}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors['email'] && (
                <p className="help is-danger">{errors['email']}</p>
              )}
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className={classNames('input', {
                  'is-danger': errors['password'],
                })}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete=""
              />
              {errors['password'] && (
                <p className="help is-danger">{errors['password']}</p>
              )}
            </div>
          </div>

          <button className="button" type="submit">
            Отправить
          </button>
        </form>
      </section>
    </div>
  </div>
);

export default SignUpVuew;
