import Processing from 'app/ui/Processing';
import ProjectCreateField from './ProjectCreateField';

const ProjectCreateView = ({
  projectCreateForm: { handleSubmit, isSubmitting, isDisabled },
}) => {
  return (
    <div className="create-project">
      <h1 className="is-size-1  title has-text-weight-normal title has-text-weight-normal">
        Создать новый проект
      </h1>
      <div className="columns">
        <form className="signin-form column is-half" onSubmit={handleSubmit}>
          <Processing processing={isSubmitting} />

          <div className="field">
            <label className="label">Название</label>
            <ProjectCreateField field="name" />
          </div>
          <div className="field">
            <label className="label">Описание</label>
            <ProjectCreateField field="description" control="textarea" />
          </div>
          <button
            className="button is-primary"
            type="submit"
            disabled={isDisabled}>
            Создать
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectCreateView;
