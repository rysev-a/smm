import { socialAccountApi } from 'app/services/api';
import AsyncList from 'app/core/plugins/Form/AsyncList';
import history from 'app/core/history';

class TaskListModel extends AsyncList {
  constructor() {
    super(socialAccountApi);
  }

  edit = socialAccountId => {
    history.push(`/social-accounts/${socialAccountId}/edit`);
  };
}

export default TaskListModel;
