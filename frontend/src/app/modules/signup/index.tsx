import { observer } from 'inferno-mobx';
import SignUpView from './SignUpView';
import signUpModel from './SignUpModel';

const SignUp = () => <SignUpView {...signUpModel} />;
export default observer(SignUp);
