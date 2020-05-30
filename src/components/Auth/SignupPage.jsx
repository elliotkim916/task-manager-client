import React from 'react';
import Form from '../Form';

const SignupPage = ({ history }) => {
  return (
    <React.Fragment>
      <h1>Sign Up</h1>
      <Form history={history} type='signup' />
    </React.Fragment>
  );
};

export default SignupPage;