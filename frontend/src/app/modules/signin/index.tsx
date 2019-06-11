import { observer } from 'inferno-mobx';
import signInModel from './SignInModel';
import SignInView from './SignInView';

const SignIn = observer(() => <SignInView {...signInModel} />);

export default SignIn;
