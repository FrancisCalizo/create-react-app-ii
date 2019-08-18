import React, { Fragment } from 'react';
import loading from './loading.gif';

const Loading = () => {
  return (
    <Fragment>
      <img src={loading} alt="Loading..." style={loadingStyle} />
    </Fragment>
  );
};

const loadingStyle = {
  width: '200px',
  margin: 'auto',
  display: 'block'
};

export default Loading;
