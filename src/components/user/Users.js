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
          <div key={user.id}>
            <img src={user.avatar_url} alt="User" />
            {user.login}
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
