import { Component } from 'inferno';
import UserDetailView from './UserDetailView';
import { UserDetailModel } from './UserDetailModel';
import { observer } from 'inferno-mobx';

interface UserDetailProps {
  userDetailModel: UserDetailModel;
}

class UserDetailContainer extends Component<UserDetailProps> {
  componentWillUnmount() {
    this.props.userDetailModel.reset();
  }

  componentDidMount() {
    this.props.userDetailModel.getUserId(this.props);
    this.props.userDetailModel.load();
  }

  render() {
    const View = observer(UserDetailView);
    return <View userDetailModel={this.props.userDetailModel} />;
  }
}

export default UserDetailContainer;
