import { withRouter } from 'inferno-router';
import { inject } from 'inferno-mobx';
import ProjectDetailContainer from './ProjectDetailContainer';

export default withRouter(
  inject(({ store }) => ({
    projectDetailModel: store.projectDetailModel,
  }))(ProjectDetailContainer)
);
