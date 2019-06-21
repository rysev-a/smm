import { withRouter } from 'inferno-router';
import { inject, observer } from 'inferno-mobx';
import ProjectEditView from './ProjectEditView';

export default withRouter(
  inject(({ store }) => ({
    projectEditForm: store.projectEditForm,
  }))(observer(ProjectEditView))
);
