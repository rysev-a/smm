import * as moment from 'moment';
import FieldFactory from 'app/core/plugins/Form/FieldFactory';

const CommentListField = FieldFactory('commentListModel');

const CommentItem = ({ comment }) => (
  <article class="message is-small">
    <div class="message-header">
      <p>
        {comment.user.email} - {moment(comment.created_at).format('DD-MM-YYYY')}
      </p>
    </div>
    <div class="message-body">{comment.content}</div>
  </article>
);

const CommentListView = ({ commentList }) => (
  <div className="container">
    {commentList.items.length > 0 && (
      <div className="comment-list">
        <h3 className="is-size-3">Комментарии</h3>
        <div className="comments">
          {commentList.items.map(comment => (
            <CommentItem comment={comment} />
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
