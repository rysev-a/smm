import classNames from 'classnames';
import Processing from 'app/ui/Processing';

const AccountSettingsView = ({
  account: {
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    data,
    isDisabled,
  },
}) => {
  return (
    <div className="profile">
      <h1 className="is-size-1  title has-text-weight-normal title has-text-weight-normal">
        Профиль
      </h1>
      <div className="columns">
        <form className="signin-form column is-half" onSubmit={handleSubmit}>
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
                defaultValue={data.first_name}
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
                defaultValue={data.last_name}
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
                defaultValue={data.email}
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
          <button
            className="button is-primary"
            type="submit"
            disabled={isDisabled}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountSettingsView;
