import classNames from 'classnames';

const TaskAttachedFile = ({ attachedFile }) =>
  attachedFile && (
    <div className="attached-file">
      <h2 className="is-size-4 title has-text-weight-normal">Скачать файл</h2>
      <p>
        <a
          className="is-small button is-primary"
          href={`/${attachedFile}`}
          target="_blank">
          {attachedFile}
        </a>
      </p>
    </div>
  );

export default TaskAttachedFile;
