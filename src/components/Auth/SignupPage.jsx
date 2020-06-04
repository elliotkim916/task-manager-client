import React from 'react';
import UserForm from '../Forms/UserForm';

const SignupPage = ({ history }) => {
  return (
    <React.Fragment>
      <h1>Sign Up</h1>
      <UserForm history={history} type='signup' />
    </React.Fragment>
  );
};

export default SignupPage;