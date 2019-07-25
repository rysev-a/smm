import * as moment from 'moment';
import FieldFactory from 'app/core/plugins/Form/FieldFactory';

const CommentListField = FieldFactory('commentListModel');

const CommentItem = ({ comment, remove, edit }) => (
  <article className="message is-small">
    <div className="message-header">
      <p>
        {comment.user.email} -{' '}
        {moment(comment.created_at).format('DD-MM-YYYY HH:mm')}
      </p>

      <div className="buttons is-pulled-right">
        <a className="button is-small is-info" onClick={() => edit(comment.id)}>
          <span>Редактировать</span>
          <span className="icon is-small">
            <i className="fas fa-edit" />
          </span>
        </a>

        <a
          className="button is-small is-danger"
          onClick={() => remove(comment.id)}>
          <span>Удалить</span>
          <span className="icon is-small">
            <i className="fas fa-times" />
          </span>
        </a>
      </div>
    </div>
    <div className="message-body">{comment.content}</div>
  </article>
);

const CommentEditForm = ({ comment, handleChange, edited, save }) => (
  <article className="message is-small">
    <div className="message-header">
      <p>
        {comment.user.email} -{' '}
        {moment(comment.created_at).format('DD-MM-YYYY HH:mm')}
      </p>

      <div className="buttons is-pulled-right">
        <a className="button is-small is-primary" onClick={save}>
          <span>Сохранить</span>
          <span className="icon is-small">
            <i className="fas fa-save" />
          </span>
        </a>
      </div>
    </div>
    <textarea
      onInput={handleChange}
      name="edited"
      value={edited}
      className="textarea"
    />
  </article>
);

const CommentListView = ({ commentList }) => (
  <div className="container">
    {commentList.items.length > 0 && (
      <div className="comment-list">
        <h3 className="is-size-3">Комментарии</h3>
        <div className="comments">
          {commentList.items.map(comment => {
            if (comment.id === commentList.edited) {
              return (
                <CommentEditForm
                  save={commentList.save}
                  comment={comment}
                  edited={commentList.values.edited}
                  handleChange={commentList.handleChange}
                />
              );
            }

            return (
              <CommentItem
                comment={comment}
                remove={commentList.remove}
                edit={commentList.edit}
              />
            );
          })}
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
