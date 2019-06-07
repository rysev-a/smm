import { observer } from 'inferno-mobx';
import SignUpView from './SignUpView';
import signUpForm from './SignUpForm';

const SignUp = () => <SignUpView {...signUpForm} />;
export default observer(SignUp);
