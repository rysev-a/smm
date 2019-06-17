import Processing from 'app/ui/Processing';
import SignInField from './SignInFIeld';

const SignInView = ({ handleSubmit, isSubmitting }) => (
  <div className="level">
    <div className="level-item">
      <section className="section">
        <div className="level">
          <h2 className="is-size-4 is-center level-item">Вход</h2>
        </div>
        <form className="signin-form" onSubmit={handleSubmit}>
          <Processing processing={isSubmitting} />

          <div className="field">
            <label className="label">Email</label>
            <SignInField field="email" type="email" />
          </div>

          <div className="field">
            <label className="label">Password</label>
            <SignInField field="password" type="password" />
          </div>

          <button className="button" type="submit">
            Войти
          </button>
        </form>
      </section>
    </div>
  </div>
);

export default SignInView;
