const AccountView: any = ({ accountModel }) => (
  <div className="account">
    {console.log(accountModel)}
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>Hello, {accountModel.data.email}</div>
      <p>
        <a className="button is-violet" onClick={accountModel.signout}>
          logout
        </a>
      </p>
    </div>
  </div>
);

export default AccountView;
