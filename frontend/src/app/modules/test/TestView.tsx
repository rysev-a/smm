const TestView = ({ userDetailModel }) => (
  <div
    onClick={() => {
      userDetailModel.userId = 1;
      userDetailModel.load();
    }}>
    <p>try to load</p>
    <p>{userDetailModel.data.email}</p>
  </div>
);

export default TestView;
