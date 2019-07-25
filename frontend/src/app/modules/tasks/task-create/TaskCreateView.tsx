import Processing from 'app/ui/Processing';
import AsyncSelect from 'app/ui/AsyncSelect';
import { Component } from 'inferno';
import FieldFactory from 'app/core/plugins/Form/FieldFactory';
import { formatTagMessge, formatPriorityMessage } from '../taskUtils';

interface TaskCreateViewProps {
  taskCreateForm: any;
  match: any;
}

const TaskEditField = FieldFactory('taskCreateForm');

class TaskCreateView extends Component<TaskCreateViewProps> {
  componentWillUnmount() {
    this.props.taskCreateForm.reset();
  }

  render() {
    const {
      taskCreateForm: {
        attachFile,
        handleSubmit,
        handleChange,
        processing,
        isDisabled,
        values,
        getAssigneeLabel,
        getProjectLabel,
        assigneeOptions,
        projectOptions,
        updateAssignee,
        updateProject,
        loadAssigneeOptions,
        loadProjectOptions,
      },
    } = this.props;

    return (
      <div className="create-task">
        <h1 className="is-size-1  title has-text-weight-normal title has-text-weight-normal">
          Создать новую задачу
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
                <div class="file has-name">
                  <label class="file-label">
                    <input
                      onChange={attachFile}
                      class="file-input"
                      type="file"
                      name="resume"
                    />
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload" />
                      </span>
                      <span class="file-label">Прикрепить файл</span>
                    </span>

                    {values.file && (
                      <span class="file-name">{values.file.name}</span>
                    )}
                  </label>
                </div>
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
            </div>
          </div>
          <button
            className="button is-primary"
            type="submit"
            disabled={isDisabled}>
            Создать
          </button>
        </form>
      </div>
    );
  }
}

export default TaskCreateView;
