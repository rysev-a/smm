const TempPage = ({ title, description, children = null }) => (
  <div className="section">
    <div className="container">
      <h1 className="is-size-1  title has-text-weight-normal">{title}</h1>
      <p className="is-size-4">{description}</p>
      {children}
    </div>
  </div>
);

export default TempPage;
