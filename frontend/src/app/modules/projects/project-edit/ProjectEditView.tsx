import Processing from 'app/ui/Processing';
import AsyncSelect from 'app/ui/AsyncSelect';
import { Component } from 'inferno';
import FieldFactory from './FieldFactory';

interface ProjectCreateViewProps {
  projectEditForm: any;
  match: any;
}

const ProjectEditField = FieldFactory('projectEditForm');

class ProjectCreateView extends Component<ProjectCreateViewProps> {
  componentWillUnmount() {
    this.props.projectEditForm.reset();
  }

  componentDidMount() {
    this.props.projectEditForm.load(this.props.match.params.projectId);
  }

  render() {
    const {
      projectEditForm: {
        handleSubmit,
        processing,
        isDisabled,
        values,
        userOptions,
        loadOptions,
        updateUsers,
        getLabel,
      },
    } = this.props;

    return (
      <div className="edit-project">
        <h1 className="is-size-1  title has-text-weight-normal title has-text-weight-normal">
          Редактировать проект
        </h1>

        <form className="signin-form" onSubmit={handleSubmit}>
          <Processing processing={processing} />
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Название</label>
                <ProjectEditField control="input" field="name" />
              </div>
              <div className="field">
                <label className="label">Описание</label>
                <ProjectEditField field="description" control="textarea" />
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
            Сохранить
          </button>
        </form>
      </div>
    );
  }
}

export default ProjectCreateView;
