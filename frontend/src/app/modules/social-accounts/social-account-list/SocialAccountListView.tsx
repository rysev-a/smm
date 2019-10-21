import Processing from 'app/ui/Processing';
import { Link } from 'inferno-router';
import { Component } from 'inferno';
import Pagination from 'app/ui/Pagination';

interface SocialAccountListProps {
  socialAccountList: any;
}

class SocialAccountListView extends Component<SocialAccountListProps> {
  componentWillUnmount() {
    this.props.socialAccountList.reset();
  }

  componentDidMount() {
    this.props.socialAccountList.load();
  }

  render() {
    const {
      socialAccountList: {
        items,
        processing,
        loaded,
        remove,
        edit,
        pagination,
        pageSet,
      },
    } = this.props;
    return (
      <div className="tasks">
        <Processing processing={processing} />
        <h1 className="is-size-1  title has-text-weight-normal">
          Аккаунты социальных сетей
        </h1>
        {loaded && items.length === 0 ? (
          <h1>Пока что нет ни одного аккаунта</h1>
        ) : (
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>Id</th>
                <th>Логин</th>
                <td>Пароль</td>
                <td>Токен для входа</td>
                <td>Социальная сеть</td>

                <td>Действия</td>
              </tr>
            </thead>

            <tbody>
              {items.map(({ id, login, password, token, social_network }) => (
                <tr key={id}>
                  <th>{id}</th>
                  <td>
                    <Link to={`/social-accounts/${id}`}>{login}</Link>
                  </td>
                  <td>{password}</td>
                  <td>{token}</td>
                  <td>{social_network}</td>
                  <td>
                    <div className="is-grouped field">
                      <div className="control">
                        <a
                          className="button is-primary is-small"
                          onClick={() => edit(id)}>
                          Редактировать
                        </a>
                      </div>
                      <div className="control">
                        <a
                          className="button is-danger is-small"
                          onClick={() => remove(id)}>
                          Удалить
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6}>
                  <Pagination pagination={pagination} pageSet={pageSet} />
                </td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    );
  }
}

export default SocialAccountListView;
