import { observer } from 'inferno-mobx';
import ProjectCreateView from './ProjectCreateView';
import projectCreateForm from './ProjectCreateForm';

const ProjectCreateObservedView = observer(ProjectCreateView);

const ProjectCreate = () => (
  <ProjectCreateObservedView projectCreateForm={projectCreateForm} />
);

export default ProjectCreate;
