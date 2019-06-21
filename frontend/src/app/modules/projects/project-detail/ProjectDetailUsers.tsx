import { map } from 'ramda';
import { Link } from 'inferno-router';

const ProjectDetailUsers = ({ users }) => (
  <>
    <h2 className="is-size-4 title has-text-weight-normal">Участники</h2>
    {users.length ? (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <td>Электронная почта</td>
            <td>Имя</td>
            <td>Фамилия</td>
          </tr>
        </thead>
        <tbody>
          {map(({ id, first_name, last_name, email }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>
                <Link to={`/users/${id}`}>{email}</Link>
              </td>
              <td>{first_name}</td>
              <td>{last_name}</td>
            </tr>
          ))(users)}
        </tbody>
      </table>
    ) : (
      <h3 className="is-size-5 title has-text-weight-normal">
        Пока что нет ни одного учаcтника
      </h3>
    )}
  </>
);

export default ProjectDetailUsers;
