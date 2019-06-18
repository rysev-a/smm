const UserCard = ({ email, first_name, last_name, phone }) => (
  <div className="columns">
    <div className="column is-one-third">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">
                {first_name} {last_name}
              </p>
              <p className="subtitle is-6">{email}</p>
              <p className="subtitle is-6">{phone}</p>
            </div>
          </div>

          <div className="content">
            Описание участника проекта
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UserCard;
