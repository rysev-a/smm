import { withRouter } from 'inferno-router';
import { inject } from 'inferno-mobx';
import UserDetailContainer from './UserDetailContainer';

export default withRouter(
  inject(({ store }) => ({
    userDetailModel: store.userDetailModel,
  }))(UserDetailContainer)
);
