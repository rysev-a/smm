import Processing from 'app/ui/Processing';
import AccountSettingsField from './AccountSettingsField';

const AccountSettingsView = ({
  account: { handleSubmit, isSubmitting, isDisabled },
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
            <AccountSettingsField field="first_name" />
          </div>
          <div className="field">
            <label className="label">Фамилия</label>
            <AccountSettingsField field="last_name" />
          </div>

          <div className="field">
            <label className="label">Email</label>
            <AccountSettingsField field="email" />
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
