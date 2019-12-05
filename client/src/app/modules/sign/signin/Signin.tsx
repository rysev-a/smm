import { inject, observer } from 'inferno-mobx';
import SigninView from './SigninView';

export default inject(({ store }) => ({
  signinModel: store.signinModel,
}))(observer(SigninView));
