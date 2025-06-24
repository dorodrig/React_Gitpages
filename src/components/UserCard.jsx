import PropTypes from 'prop-types';

function UserCard({ user }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Ciudad: {user.address.city}</p>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default UserCard;
