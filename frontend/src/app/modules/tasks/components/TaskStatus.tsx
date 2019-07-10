import classNames from 'classnames';
import { formatStatusMessage, getTaskStatusClassName } from '../taskUtils';

const TaskStatus = ({ status }) => (
  <span className={classNames('tag', getTaskStatusClassName(status))}>
    {formatStatusMessage(status)}
  </span>
);

export default TaskStatus;
