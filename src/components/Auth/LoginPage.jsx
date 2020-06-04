import React from 'react';
import UserForm from '../Forms/UserForm';

const LoginPage = ({ history }) => {
  return (
    <React.Fragment>
      <h1>Log In</h1>
      <UserForm history={history} type='login' />
    </React.Fragment>
  );
};

export default LoginPage;