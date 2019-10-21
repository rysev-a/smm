import Processing from 'app/ui/Processing';
import { Component } from 'inferno';
import FieldFactory from 'app/core/plugins/Form/FieldFactory';

interface SocialAccountEditViewProps {
  socialAccountEditForm: any;
  match: any;
}

const SocialAccountEditField = FieldFactory('socialAccountEditForm');

class SocialAccountCreateView extends Component<SocialAccountEditViewProps> {
  componentWillUnmount() {
    this.props.socialAccountEditForm.reset();
  }

  componentDidMount() {
    this.props.socialAccountEditForm.load(
      this.props.match.params.socialAccountId
    );
  }

  render() {
    const {
      socialAccountEditForm: {
        handleSubmit,
        handleChange,
        processing,
        isDisabled,
        values,
      },
    } = this.props;

    return (
      <div className="create-social-account">
        <h1 className="is-size-1  title has-text-weight-normal title has-text-weight-normal">
          Редактировать социальный аккаунт
        </h1>

        <form className="signin-form" onSubmit={handleSubmit}>
          <Processing processing={processing} />
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Login</label>
                <SocialAccountEditField control="input" field="login" />
              </div>

              <div className="field">
                <label className="label">Password</label>
                <SocialAccountEditField control="input" field="password" />
              </div>

              <div className="field">
                <label className="label">Token</label>
                <SocialAccountEditField control="input" field="token" />
              </div>

              <div className="field">
                <label className="label">Социальная сеть</label>
                <div className="select">
                  <select
                    name="social_network"
                    onChange={handleChange}
                    value={values.social_network}>
                    {['vk', 'ok', 'facebook', 'instagram'].map(
                      socialAccountTag => (
                        <option value={socialAccountTag}>
                          {socialAccountTag}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <button
            className="button is-primary"
            type="submit"
            disabled={isDisabled}>
            Сохранить изменения
          </button>
        </form>
      </div>
    );
  }
}

export default SocialAccountCreateView;
