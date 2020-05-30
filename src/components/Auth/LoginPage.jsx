import React from 'react';
import Form from '../Form';

const LoginPage = ({ history }) => {
  return (
    <React.Fragment>
      <h1>Log In</h1>
      <Form history={history} type='login' />
    </React.Fragment>
  );
};

export default LoginPage;