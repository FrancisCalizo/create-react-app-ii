import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user }) => {
  return (
    <div className="card text-center">
      <img
        src={user.avatar_url}
        alt="User"
        className="round-img"
        style={{ width: '60px' }}
      />
      <p>{user.login}</p>
      <a href={user.html_url} className="btn btn-dark btn-sm my-1">
        More
      </a>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
