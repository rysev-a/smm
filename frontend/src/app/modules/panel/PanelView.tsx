import Processing from 'app/ui/Processing';
import { Component } from 'inferno';
import PanelProjects from './components/PanelProjects';
import PanelTasks from './components/PanelTask';
import PanelTaskForm from './components/PanelTaskForm';

interface PanelViewProps {
  panelModel: any;
}

class PanelView extends Component<PanelViewProps> {
  componentWillUnmount() {
    this.props.panelModel.reset();
  }

  componentDidMount() {
    this.props.panelModel.loadProjects();
  }

  render() {
    const {
      panelModel: {
        status: { processing, loaded },
        projects,
        activeProjectId,
        setActiveProject,
        tasks,
        setActiveTask,
        activeTaskId,
        editTask,
      },
    } = this.props;
    return (
      <div className="panel">
        <Processing processing={processing} />
        <div className="columns">
          <div className="column is-3">
            <PanelProjects
              projects={projects}
              loaded={loaded}
              activeProjectId={activeProjectId}
              setActiveProject={setActiveProject}
            />
          </div>
          <div className="column is-3">
            <PanelTasks
              tasks={tasks}
              activeTaskId={activeTaskId}
              setActiveTask={setActiveTask}
              editTask={editTask}
            />
          </div>
          <div class="column is-6">
            {tasks.length > 0 && Number(activeTaskId) > 0 && <PanelTaskForm />}
          </div>
        </div>
      </div>
    );
  }
}

export default PanelView;
