import Processing from 'app/ui/Processing';
import { Link } from 'inferno-router';

const PostListComponent = ({
  postList: { items, status, editPost, removePost, publicPost },
}) => (
  <div className="posts">
    <Processing processing={status.processing} />
    <h1 className="is-size-1  title has-text-weight-normal">Посты</h1>
    {status.loaded && items.length === 0 ? (
      <h1>Пока что нет ни одного поста</h1>
    ) : (
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Id</th>
            <th>Название</th>
            <td>Описание</td>
            <td>Статус</td>
            <td>Действия</td>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, name, description, status }) => (
            <tr key={id}>
              <th>{id}</th>
              <td>
                <Link to={`/posts/${id}`}>{name}</Link>
              </td>
              <td>{description}</td>
              <td>{status}</td>
              <td>
                <div className="is-grouped field">
                  <div className="control">
                    <a
                      className="button is-danger is-small"
                      onClick={() => removePost(id)}>
                      Удалить
                    </a>
                  </div>
                  <div className="control">
                    <button
                      disabled={status === 'published'}
                      className="button is-primary is-small"
                      onClick={() => publicPost(id)}>
                      Опубликовать
                    </button>
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

export default PostListComponent;
