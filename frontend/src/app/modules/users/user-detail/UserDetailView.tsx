import Processing from 'app/ui/Processing';
import UserCard from './UserCardView';

const UserDetailView = ({
  userDetailModel: {
    data: { email, first_name, last_name, phone },
    loaded,
    processing,
  },
}) => (
  <div className="users">
    <Processing processing={processing} />
    <section className="hero is-dark">
      <div className="hero-body">
        <div className="container">
          {loaded && (
            <div className="container">
              <h1 className="is-size-1  title has-text-weight-normal">
                {first_name} {last_name}
              </h1>
            </div>
          )}
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <UserCard
          email={email}
          first_name={first_name}
          last_name={last_name}
          phone={phone}
        />
      </div>
    </section>
  </div>
);

export default UserDetailView;
