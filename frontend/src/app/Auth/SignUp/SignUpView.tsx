import signUpForm, { SignUpFormData } from './SignUpForm';

const SignUpView = ({
  updateEmail,
  updatePassword,
  email,
  password,
  submit,
}: SignUpFormData) => (
  <div className="auth">
    <input type="email" onChange={updateEmail} placeholder="email" />
    <input type="password" onChange={updatePassword} placeholder="password" />
    <div>signup email {email}</div>
    <div>signup password {password}</div>

    <div className="buttons">
      <a className="button" onClick={submit}>
        Submit
      </a>
    </div>
  </div>
);

SignUpView.defaultHooks = {
  onComponentWillUnmount: () => {
    signUpForm.reset();
  },
};

export default SignUpView;
