import { withRouter } from 'inferno-router';
import { inject, observer } from 'inferno-mobx';
import LoggingView from './LoggingView';

export default withRouter(
  inject(({ store }) => ({
    logging: store.loggingModel,
  }))(observer(LoggingView))
);
