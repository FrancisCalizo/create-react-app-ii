import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../layout/Loading';
import UserItem from './UserItem';

const Users = ({ loading, users }) => {
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
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
