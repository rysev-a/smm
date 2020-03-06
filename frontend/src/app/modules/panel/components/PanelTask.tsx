import classNames from 'classnames';

const EditTask = ({ task, editTask }) => (
  <div className="field">
    <input
      className="input"
      defaultValue={task.name}
      onInput={(e: any) => {
        editTask({ id: task.id, values: { name: e.target.value } });
      }}
    />
  </div>
);

const PanelTasks = ({ tasks, activeTaskId, setActiveTask, editTask }) => (
  <aside className="menu">
    <p className="menu-label">Задачи проекта</p>
    <ul className="menu-list">
      {tasks.map(task =>
        task.id === activeTaskId ? (
          <EditTask task={task} editTask={editTask} />
        ) : (
          <li>
            <a onClick={() => setActiveTask(task.id)}>{task.name}</a>
          </li>
        )
      )}
    </ul>
  </aside>
);

export default PanelTasks;
