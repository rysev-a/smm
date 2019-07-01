import Processing from 'app/ui/Processing';
import { Link } from 'inferno-router';
import { Component } from 'inferno';
import Pagination from 'app/ui/Pagination';

interface TaskListProps {
  taskList: any;
}

class TaskListView extends Component<TaskListProps> {
  componentWillUnmount() {
    this.props.taskList.reset();
  }

  componentDidMount() {
    this.props.taskList.load();
  }

  render() {
    const {
      taskList: {
        items,
        processing,
        loaded,
        editTask,
        remove,
        pagination,
        pageSet,
      },
    } = this.props;
    return (
      <div className="tasks">
        <Processing processing={processing} />
        <h1 className="is-size-1  title has-text-weight-normal">Задачи</h1>
        {loaded && items.length === 0 ? (
          <h1>Пока что нет ни одной задачи</h1>
        ) : (
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>Id</th>
                <th>Название</th>
                <td>Создатель</td>
                <td>Описание</td>
                <td>Действия</td>
              </tr>
            </thead>

            <tbody>
              {items.map(({ id, name, description, creator }) => (
                <tr key={id}>
                  <th>{id}</th>
                  <td>
                    <Link to={`/tasks/${id}`}>{name}</Link>
                  </td>
                  <td>
                    <Link to={`/tasks/${creator.id}`}>
                      {creator.first_name} {creator.last_name}
                    </Link>
                  </td>
                  <td>{description}</td>
                  <td>
                    <div className="is-grouped field">
                      <div className="control">
                        <a
                          className="button is-primary is-small"
                          onClick={() => editTask(id)}>
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
                <td colSpan={5}>
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

export default TaskListView;
