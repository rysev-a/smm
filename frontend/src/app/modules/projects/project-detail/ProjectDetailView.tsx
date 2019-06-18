import Processing from 'app/ui/Processing';

const ProjectDetailComponent = ({
  projectDetailModel: {
    data: { id, name, description, creator },
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

            <h3 className="is-size-5 title has-text-weight-normal">
              Пока что нет ни одного участника
            </h3>
          </div>
        )}
      </div>
    </section>
  </div>
);

export default ProjectDetailComponent;
