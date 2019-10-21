import Processing from 'app/ui/Processing';
import { Component } from 'inferno';
import FieldFactory from 'app/core/plugins/Form/FieldFactory';

interface SocialAccountCreateViewProps {
  socialAccountCreateForm: any;
  match: any;
}

const SocialAccountEditField = FieldFactory('socialAccountCreateForm');

class SocialAccountCreateView extends Component<SocialAccountCreateViewProps> {
  componentWillUnmount() {
    this.props.socialAccountCreateForm.reset();
  }

  render() {
    const {
      socialAccountCreateForm: {
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
          Добавить социальный аккаунт
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
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default SocialAccountCreateView;
