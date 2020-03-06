import { inject, observer } from 'inferno-mobx';
import PanelTaskDetail from './PanelTaskDetail';

export default inject(({ store }) => ({
  taskEditForm: store.taskEditForm,
  activeTaskId: store.panelModel.activeTaskId,
}))(observer(PanelTaskDetail));
