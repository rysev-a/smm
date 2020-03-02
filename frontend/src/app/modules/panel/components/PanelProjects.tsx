import classNames from 'classnames';

interface Project {
  id: number;
  name: string;
}

const PanelProjects = ({
  projects,
  loaded,
  activeProjectId,
  setActiveProject,
}) => (
  <aside className="menu">
    <p className="menu-label">Проекты</p>
    <ul className="menu-list">
      {projects.map((project: Project) => (
        <li>
          <a
            className={classNames({
              'is-active': project.id === activeProjectId,
            })}
            onClick={() => setActiveProject(project.id)}>
            {project.name}
          </a>
        </li>
      ))}
    </ul>
  </aside>
);

export default PanelProjects;
