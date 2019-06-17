import Processing from 'app/ui/Processing';
import SignUpField from './SignUpField';

const SignUpVuew = ({
  signUpModel: { handleSubmit, isSubmitting, isDisabled },
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
            <SignUpField field="first_name" />
          </div>

          <div className="field">
            <label className="label">Фамилия</label>
            <SignUpField field="last_name" />
          </div>

          <div className="field">
            <label className="label">Email</label>
            <SignUpField field="email" type="email" />
          </div>

          <div className="field">
            <label className="label">Password</label>
            <SignUpField field="password" type="password" />
          </div>

          <button className="button" type="submit" disabled={isDisabled}>
            Отправить
          </button>
        </form>
      </section>
    </div>
  </div>
);

export default SignUpVuew;
