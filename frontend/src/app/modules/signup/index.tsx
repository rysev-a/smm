import { observer } from 'inferno-mobx';
import SignUpView from './SignUpView';
import signUpModel from './SignUpModel';

const SignUpObservableView = observer(SignUpView);
const SignUp = () => <SignUpObservableView signUpModel={signUpModel} />;

export default SignUp;
