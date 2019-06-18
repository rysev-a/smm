import { observer } from 'inferno-mobx';
import ProjectListView from './ProjectListView';
import projectListModel from './ProjectListModel';

const ProjectListObservedView = observer(ProjectListView);

const ProjectList = () => (
  <ProjectListObservedView projectList={projectListModel} />
);

ProjectList.defaultHooks = {
  onComponentDidMount() {
    projectListModel.load();
  },
};

export default ProjectList;
