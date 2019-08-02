import AsyncList from 'app/core/plugins/Form/AsyncList';
import { loggingApi } from 'app/services/api';

class LoggingModel extends AsyncList {
  constructor() {
    super(loggingApi);
  }
}

export default LoggingModel;
