import { Component } from 'inferno';
import { style } from 'typestyle';
import * as Moment from 'moment';
import Processing from 'app/ui/Processing';

interface SocialAccountViewProps {
  socialAccountDetailModel: any;
  match: any;
}

class SocialAccountView extends Component<SocialAccountViewProps> {
  componentWillUnmount() {
    this.props.socialAccountDetailModel.reset();
  }

  componentDidMount() {
    this.props.socialAccountDetailModel.load(
      this.props.match.params.socialAccountId
    );
  }

  render() {
    const {
      socialAccountDetailModel: {
        data: { id, login, token, social_network },
        getToken,
        edit,
        loaded,
        processing,
      },
    } = this.props;

    return (
      <div className="social-account-detail">
        <Processing processing={processing} />

        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              {loaded && (
                <div className="container">
                  <h1 className="is-size-1  title has-text-weight-normal">
                    #{id} {login}
                  </h1>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            {loaded && (
              <div className="content">
                <div className="box">
                  <h2 className="is-size-4 title has-text-weight-normal">
                    Логин
                  </h2>
                  <p>
                    <span className="is-size-5">{login}</span>
                  </p>
                  <h2 className="is-size-4 title has-text-weight-normal">
                    Токен доступа
                  </h2>
                  <p>
                    <span className="is-size-5">{token || 'Не загружен'}</span>
                  </p>

                  <h2 className="is-size-4 title has-text-weight-normal">
                    Социальная сеть
                  </h2>
                  <p>
                    <span className="is-size-5">{social_network}</span>
                  </p>

                  <div className="buttons">
                    <a className="button is-primary" onClick={getToken}>
                      Получить токен
                    </a>
                    <a className="button is-primary" onClick={edit}>
                      Редактировать
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default SocialAccountView;
