import { Component } from 'inferno';
import FieldFactory from 'app/core/plugins/Form/FieldFactory';
import AsyncSelect from 'app/ui/AsyncSelect';

import Processing from 'app/ui/Processing';
import {
  formatStatusMessage,
  formatTagMessge,
  formatPriorityMessage,
} from 'app/modules/tasks/taskUtils';

const TaskEditField = FieldFactory('taskEditForm');

interface PanelTaskDetail {
  taskEditForm: any;
  activeTaskId: any;
}

class PanelTaskDetail extends Component<PanelTaskDetail> {
  constructor() {
    super();
  }

  componentWillUnmount() {
    this.props.taskEditForm.reset();
  }

  componentDidMount() {
    this.props.taskEditForm.load(this.props.activeTaskId);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.activeTaskId !== this.props.activeTaskId) {
      this.props.taskEditForm.load(nextProps.activeTaskId);
    }
  }

  render() {
    const {
      taskEditForm: {
        handleSubmit,
        processing,
        isDisabled,
        values,
        handleChange,

        // assignee
        getAssigneeLabel,
        assigneeOptions,
        updateAssignee,
        loadAssigneeOptions,

        // project
        getProjectLabel,
        projectOptions,
        updateProject,
        loadProjectOptions,
      },
    } = this.props;

    return (
      <div className="create-task">
        <h1 className="is-size-1  title has-text-weight-normal title has-text-weight-normal">
          Редактировать задачу
        </h1>

        <form className="signin-form" onSubmit={handleSubmit}>
          <Processing processing={processing} />
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Название</label>
                <TaskEditField control="input" field="name" />
              </div>
              <div className="field">
                <label className="label">Исполнитель задачи</label>
                <AsyncSelect
                  isMulti={false}
                  getLabel={getAssigneeLabel}
                  values={values['assignee']}
                  update={updateAssignee}
                  options={assigneeOptions.items}
                  loadOptions={loadAssigneeOptions}
                  name="assignee"
                />
              </div>
              <div className="field">
                <label className="label">Проект</label>
                <AsyncSelect
                  isMulti={false}
                  getLabel={getProjectLabel}
                  values={values['project']}
                  update={updateProject}
                  options={projectOptions.items}
                  loadOptions={loadProjectOptions}
                  name="project"
                />
              </div>
              <div className="field">
                <label className="label">Статус</label>
                <div className="select">
                  <select
                    name="status"
                    onChange={handleChange}
                    value={
                      values.status && values.status.replace('TaskStatus.', '')
                    }>
                    {['pending', 'progress', 'success', 'fail'].map(
                      taskStatus => (
                        <option value={taskStatus}>
                          {formatStatusMessage(taskStatus)}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div className="field">
                <label className="label">Тип задачи</label>
                <div className="select">
                  <select
                    name="tag"
                    onChange={handleChange}
                    value={values.tag && values.tag.replace('TaskTag.', '')}>
                    {['content', 'email', 'call', 'advertisement'].map(
                      taskTag => (
                        <option value={taskTag}>
                          {formatTagMessge(taskTag)}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div className="field">
                <label className="label">Приоритет задачи</label>
                <div className="select">
                  <select
                    name="priority"
                    onChange={handleChange}
                    value={
                      values.priority &&
                      values.priority.replace('TaskPriority.', '')
                    }>
                    {['low', 'medium', 'high'].map(taskPriority => (
                      <option value={taskPriority}>
                        {formatPriorityMessage(taskPriority)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Описание</label>
                <TaskEditField field="description" control="textarea" />
              </div>
              <div className="field">
                <label className="label">Срок завершения</label>
                <TaskEditField
                  control="input"
                  field="deadline"
                  type="datetime-local"
                />
              </div>
            </div>
          </div>
          <button
            className="button is-primary"
            type="submit"
            disabled={isDisabled}>
            Обновить
          </button>
        </form>
      </div>
    );
  }
}

export default PanelTaskDetail;
