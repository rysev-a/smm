import Processing from 'app/ui/Processing';
import AsyncSelect from 'app/ui/AsyncSelect';
import ProjectCreateField from './ProjectCreateField';
import { Component } from 'inferno';

interface ProjectCreateViewProps {
  projectCreateForm: any;
}

class ProjectCreateView extends Component<ProjectCreateViewProps> {
  componentWillUnmount() {
    this.props.projectCreateForm.reset();
  }
  render() {
    const {
      projectCreateForm: {
        handleSubmit,
        isSubmitting,
        isDisabled,
        userOptions,
        loadOptions,
        updateUsers,
        getLabel,
        values,
      },
    } = this.props;

    return (
      <div className="create-project">
        <h1 className="is-size-1  title has-text-weight-normal title has-text-weight-normal">
          Создать новый проект
        </h1>
        <form className="signin-form" onSubmit={handleSubmit}>
          <Processing processing={isSubmitting} />
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Название</label>
                <ProjectCreateField field="name" />
              </div>
              <div className="field">
                <label className="label">Описание</label>
                <ProjectCreateField field="description" control="textarea" />
              </div>
            </div>

            <div className="column">
              <div className="field">
                <label className="label">Участники проекта</label>
                <AsyncSelect
                  isMulti={true}
                  getLabel={getLabel}
                  values={values.users}
                  update={updateUsers}
                  options={userOptions}
                  loadOptions={loadOptions}
                  name="users"
                />
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

export default ProjectCreateView;
