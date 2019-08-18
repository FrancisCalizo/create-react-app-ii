import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../layout/Loading';

const Users = props => {
  if (props.loading) {
    return <Loading />;
  } else {
    return (
      <div style={userStyle}>
        {props.users.map(user => (
          <div key={user.id} className="card text-center">
            <img
              src={user.avatar_url}
              alt="User"
              className="round-img"
              style={{ width: '60px' }}
            />
            <p>{user.login}</p>
            <a href="www.github.com" className="btn btn-dark btn-sm my-1">
              More
            </a>
          </div>
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridColumnGap: '1rem'
};

export default Users;
