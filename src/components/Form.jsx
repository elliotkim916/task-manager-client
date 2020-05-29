import React, { useState } from 'react';
import { logIn } from '../api';
import { saveAuthToken } from '../local-storage';

const Form = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e, email, password) => {
    e.preventDefault();

    const userInfo = { email, password };
    logIn(userInfo)
      .then(res => {
        if (res.token) {
          saveAuthToken(res.token);
          // set up state/contextAPI to store user info such as name, email, age, etc.

          props.history.push('/dashboard');
        }
      });
  };

  return (
    <div>
      <form onSubmit={e => onSubmit(e, email, password)}>
        <input 
          type="text"
          name="email" 
          placeholder="Enter email" 
          onChange={e => setEmail(e.target.value)} 
        /><br/>
        <input 
          type="password"
          name="password" 
          placeholder="Enter password" 
          onChange={e => setPassword(e.target.value)} 
        /><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;