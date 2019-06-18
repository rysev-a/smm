import Processing from 'app/ui/Processing';
import Pagination from 'app/ui/Pagination';
import { Link } from 'inferno-router';

const UserListComponent = ({
  userList: { items, pagination, status, pageSet },
}) => (
  <div className="users">
    <Processing processing={status.processing} />
    <h1 className="is-size-1  title has-text-weight-normal">Пользователи</h1>
    {status.loaded && items.length === 0 ? (
      <h1>Пока что нет ни одного пользователя</h1>
    ) : (
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <td>Имя</td>
            <td>Фамилия</td>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, email, first_name, last_name }) => (
            <tr key={id}>
              <th>{id}</th>
              <td>
                <Link to={`/users/${id}`}>{email}</Link>
              </td>
              <td>{first_name}</td>
              <td>{last_name}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              <Pagination pagination={pagination} pageSet={pageSet} />
            </td>
          </tr>
        </tfoot>
      </table>
    )}
  </div>
);

export default UserListComponent;
