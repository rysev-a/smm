import signInModel from './SignInModel';
import SignInView from './SignInView';
import { observer } from 'inferno-mobx';

const SignInObserverView = observer(SignInView);
const SignIn = () => <SignInObserverView signInModel={signInModel} />;

export default SignIn;
