import Processing from 'app/ui/Processing';
import { Link } from 'inferno-router';

const ProjectListComponent = ({
  projectList: { items, pagination, status },
  // pageSet,
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
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              {/* <Pagination pagination={pagination} pageSet={pageSet} /> */}
            </td>
          </tr>
        </tfoot>
      </table>
    )}
  </div>
);

export default ProjectListComponent;
