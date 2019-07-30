import { Component } from 'inferno';
import { style } from 'typestyle';
import * as Moment from 'moment';
import Processing from 'app/ui/Processing';
import TaskStatus from '../components/TaskStatus';
import TaskAttachedFile from '../components/TaskAttachedFile';
import { formatTagMessge } from '../taskUtils';
import CommentList from 'app/modules/comments/comment-list';
import TaskPriority from '../components/TaskPriority';

const TaskDetailButtonsClassName = style({
  marginTop: '20px',
});

interface TaskDetailViewProps {
  taskDetailModel: any;
  commentListModel: any;
  match: any;
}

class TaskDetailView extends Component<TaskDetailViewProps> {
  componentWillUnmount() {
    this.props.taskDetailModel.reset();
  }

  componentDidMount() {
    this.props.taskDetailModel.load(
      this.props.match.params.taskId,
      this.props.commentListModel
    );
  }

  render() {
    const {
      taskDetailModel: {
        data: {
          id,
          name,
          description,
          project,
          creator,
          assignee,
          created_at,
          deadline,
          status,
          tag,
          priority,
          attached_file,
        },
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
                <div className="box">
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

                  {deadline && (
                    <>
                      <h2 className="is-size-4 title has-text-weight-normal">
                        Срок завершения
                      </h2>
                      <p>{Moment(deadline).format('DD-MM-YYYY HH:mm')}</p>
                    </>
                  )}

                  <h2 className="is-size-4 title has-text-weight-normal">
                    Тип задачи
                  </h2>
                  <p>{formatTagMessge(tag)}</p>

                  <h2 className="is-size-4 title has-text-weight-normal">
                    Статус
                  </h2>
                  <TaskStatus status={status} />

                  <h2 className="is-size-4 title has-text-weight-normal">
                    Приоритет
                  </h2>
                  <TaskPriority priority={priority} />

                  <TaskAttachedFile attachedFile={attached_file} />
                  <div className={`buttons ${TaskDetailButtonsClassName}`}>
                    <a className="button is-primary" onClick={editTask}>
                      Редактировать
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="section">
            <CommentList />
          </div>
        </section>
      </div>
    );
  }
}

export default TaskDetailView;
