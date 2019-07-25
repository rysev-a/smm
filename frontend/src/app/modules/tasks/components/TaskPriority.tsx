import classNames from 'classnames';
import { formatPriorityMessage, getTaskPriorityClassName } from '../taskUtils';

const TaskPriority = ({ priority }) => (
  <span className={classNames('tag', getTaskPriorityClassName(priority))}>
    {formatPriorityMessage(priority)}
  </span>
);

export default TaskPriority;
