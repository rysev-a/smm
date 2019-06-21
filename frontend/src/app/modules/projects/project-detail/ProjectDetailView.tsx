import Processing from 'app/ui/Processing';
import ProjectDetailUsers from './ProjectDetailUsers';
import { toJS } from 'mobx';

const ProjectDetailComponent = ({
  projectDetailModel: {
    data: { id, name, description, creator, users },
    editProject,
    loaded,
    processing,
  },
}) => (
  <div className="users">
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
              Администратор
            </h2>
            <p>
              <span className="is-size-5">
                {creator.first_name} {creator.last_name}
              </span>
            </p>
            <h2 className="is-size-4 title has-text-weight-normal">Описание</h2>
            <p>{description}</p>
            <ProjectDetailUsers users={toJS(users)} />
            <div className="buttons">
              <a className="button is-primary" onClick={editProject}>
                Редактировать
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  </div>
);

export default ProjectDetailComponent;
