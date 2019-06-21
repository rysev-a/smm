import Processing from 'app/ui/Processing';
import { Link } from 'inferno-router';

const ProjectListComponent = ({
  projectList: { items, status, editProject, removeProject },
}) => (
  <div className="projects">
    <Processing processing={status.processing} />
    <h1 className="is-size-1  title has-text-weight-normal">Проекты</h1>
    {status.loaded && items.length === 0 ? (
      <h1>Пока что нет ни одного проекта</h1>
    ) : (
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Id</th>
            <th>Название</th>
            <td>Создатель</td>
            <td>Описание</td>
            <td>Действия</td>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, name, description, creator }) => (
            <tr key={id}>
              <th>{id}</th>
              <td>
                <Link to={`/projects/${id}`}>{name}</Link>
              </td>
              <td>
                <Link to={`/users/${creator.id}`}>
                  {creator.first_name} {creator.last_name}
                </Link>
              </td>
              <td>{description}</td>
              <td>
                <div className="is-grouped field">
                  <div className="control">
                    <a
                      className="button is-primary is-small"
                      onClick={() => editProject(id)}>
                      Редактировать
                    </a>
                  </div>
                  <div className="control">
                    <a
                      className="button is-danger is-small"
                      onClick={() => removeProject(id)}>
                      Удалить
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default ProjectListComponent;
