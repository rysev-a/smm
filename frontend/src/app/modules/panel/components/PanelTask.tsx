import classNames from 'classnames';

const PanelTasks = ({ tasks, activeTaskId, setActiveTask }) => (
  <aside className="menu">
    <p className="menu-label">Задачи проекта</p>
    <ul className="menu-list">
      {tasks.map(task => (
        <li>
          <a
            className={classNames({
              'is-active': task.id === activeTaskId,
            })}
            onClick={() => setActiveTask(task.id)}>
            {task.name}
          </a>
        </li>
      ))}
    </ul>
  </aside>
);

export default PanelTasks;
