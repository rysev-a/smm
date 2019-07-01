import Processing from 'app/ui/Processing';
import AsyncSelect from 'app/ui/AsyncSelect';
import { Component } from 'inferno';
import FieldFactory from 'app/core/plugins/Form/FieldFactory';

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
        handleSubmit,
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
