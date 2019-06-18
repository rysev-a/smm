import { Component } from 'inferno';
import ProjectDetailView from './ProjectDetailView';
import ProjectDetailModel from './ProjectDetailModel';
import { observer } from 'inferno-mobx';

interface ProjectDetailProps {
  projectDetailModel: ProjectDetailModel;
}

class ProjectDetailContainer extends Component<ProjectDetailProps> {
  componentWillUnmount() {
    this.props.projectDetailModel.reset();
  }

  componentDidMount() {
    this.props.projectDetailModel.getProjectId(this.props);
    this.props.projectDetailModel.load();
  }

  render() {
    const View = observer(ProjectDetailView);
    return <View projectDetailModel={this.props.projectDetailModel} />;
  }
}

export default ProjectDetailContainer;
