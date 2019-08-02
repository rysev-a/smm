import Processing from 'app/ui/Processing';
import { Component } from 'inferno';
import Pagination from 'app/ui/Pagination';

interface LoggingViewProps {
  logging: any;
}

class LoggingView extends Component<LoggingViewProps> {
  componentDidMount() {
    this.props.logging.load();
  }

  render() {
    const {
      logging: { items, processing, loaded, remove, pagination, pageSet },
    } = this.props;

    return (
      <div className="projects">
        <Processing processing={processing} />
        <h1 className="is-size-1  title has-text-weight-normal">Действия</h1>
        {loaded && items.length === 0 ? (
          <h1>Пока что нет ни одного действия</h1>
        ) : (
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>Id</th>
                <th>Пользователь</th>
                <td>Действие</td>
                <td>Модуль</td>
                <td>Время</td>
                <td>Действия</td>
              </tr>
            </thead>

            <tbody>
              {items.map(({ id, user, action, module, created_at }) => (
                <tr key={id}>
                  <th>{id}</th>
                  <td>
                    {user.first_name} {user.last_name}
                  </td>
                  <td>{action}</td>
                  <td>{module}</td>
                  <td>{created_at}</td>
                  <td>
                    <div className="is-grouped field">
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
                <td colSpan={7}>
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

export default LoggingView;
