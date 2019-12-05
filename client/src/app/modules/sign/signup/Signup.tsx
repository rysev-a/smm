import { inject, observer } from 'inferno-mobx';
import SignupView from './SignupView';

export default inject(({ store }) => ({
  signupModel: store.signupModel,
}))(observer(SignupView));
