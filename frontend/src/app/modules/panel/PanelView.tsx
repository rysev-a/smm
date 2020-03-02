import Processing from 'app/ui/Processing';
import { Component } from 'inferno';
import PanelProjects from './components/PanelProjects';
import PanelTasks from './components/PanelTask';

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
          <div className="column is-9">
            <PanelTasks
              tasks={tasks}
              activeTaskId={activeTaskId}
              setActiveTask={setActiveTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PanelView;
