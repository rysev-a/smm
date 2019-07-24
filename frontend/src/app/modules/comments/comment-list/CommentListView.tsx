import * as moment from 'moment';
import FieldFactory from 'app/core/plugins/Form/FieldFactory';

const CommentListField = FieldFactory('commentListModel');

const CommentItem = ({ comment, remove }) => (
  <article className="message is-small">
    <div className="message-header">
      <p>
        {comment.user.email} - {moment(comment.created_at).format('DD-MM-YYYY')}
      </p>
      <a
        className="button is-pulled-right is-small is-danger"
        onClick={() => remove(comment.id)}>
        <span>Удалить</span>
        <span className="icon is-small">
          <i className="fas fa-times" />
        </span>
      </a>
    </div>
    <div className="message-body">{comment.content}</div>
  </article>
);

const CommentListView = ({ commentList }) => (
  <div className="container">
    {commentList.items.length > 0 && (
      <div className="comment-list">
        <h3 className="is-size-3">Комментарии</h3>
        <div className="comments">
          {commentList.items.map(comment => (
            <CommentItem comment={comment} remove={commentList.remove} />
          ))}
        </div>
      </div>
    )}
    <div className="box is-small">
      <div className="form">
        <CommentListField field="content" control="textarea" />
        <button
          className="button is-small"
          onClick={() => {
            commentList.submit();
          }}>
          Добавить комментарий
        </button>
      </div>
    </div>
  </div>
);

export default CommentListView;
