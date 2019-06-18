import { observer } from 'inferno-mobx';
import UserListView from './UserListView';
import userListModel from './UserListModel';

const UserListObservedView = observer(UserListView);

const UserList = () => <UserListObservedView userList={userListModel} />;

UserList.defaultHooks = {
  onComponentDidMount() {
    userListModel.load();
  },
};

export default UserList;
