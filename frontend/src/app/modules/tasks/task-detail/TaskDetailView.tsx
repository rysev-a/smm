import Processing from 'app/ui/Processing';
import { Component } from 'inferno';
import * as Moment from 'moment';

interface TaskDetailViewProps {
  taskDetailModel: any;
  match: any;
}

class TaskDetailView extends Component<TaskDetailViewProps> {
  componentWillUnmount() {
    this.props.taskDetailModel.reset();
  }

  componentDidMount() {
    this.props.taskDetailModel.load(this.props.match.params.taskId);
  }

  render() {
    const {
      taskDetailModel: {
        data: { id, name, description, project, creator, assignee, created_at },
        editTask,
        loaded,
        processing,
      },
    } = this.props;

    return (
      <div className="task-detail">
        <Processing processing={processing} />

        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              {loaded && (
                <div className="container">
                  <h1 className="is-size-1  title has-text-weight-normal">
                    #{id} {name}
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
                <h2 className="is-size-4 title has-text-weight-normal">
                  Создатель
                </h2>
                <p>
                  <span className="is-size-5">
                    {creator.first_name} {creator.last_name}
                  </span>
                </p>
                <h2 className="is-size-4 title has-text-weight-normal">
                  Исполнитель
                </h2>
                <p>
                  <span className="is-size-5">
                    {assignee.first_name} {assignee.last_name}
                  </span>
                </p>
                <h2 className="is-size-4 title has-text-weight-normal">
                  Проект
                </h2>
                <p>
                  <span className="is-size-5">{project.name}</span>
                </p>
                <h2 className="is-size-4 title has-text-weight-normal">
                  Описание
                </h2>
                <p>{description}</p>
                <h2 className="is-size-4 title has-text-weight-normal">
                  Дата создания
                </h2>
                <p>{Moment(created_at).format('DD-MM-YYYY')}</p>
                <div className="buttons">
                  <a className="button is-primary" onClick={editTask}>
                    Редактировать
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default TaskDetailView;
