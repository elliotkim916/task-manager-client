import React from 'react';
import { Redirect } from 'react-router-dom';
import { loadAuthToken } from '../local-storage';

const requiresLogin = ({ children }) => {
  const authToken = loadAuthToken();
  if (authToken === null || authToken === undefined) {
    return <Redirect to="/" />;
  }
  
  return (
    <React.Fragment>
      { children }
    </React.Fragment>
  );
};

export default requiresLogin;