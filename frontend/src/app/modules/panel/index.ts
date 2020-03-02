import { withRouter } from 'inferno-router';
import { inject, observer } from 'inferno-mobx';
import PanelView from './PanelView';

export default withRouter(
  inject(({ store }) => ({
    panelModel: store.panelModel,
  }))(observer(PanelView))
);
