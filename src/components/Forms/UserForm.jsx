import React, { useState, useRef, useEffect } from 'react';
import { logIn, signUp } from '../../api';
import { saveAuthToken } from '../../local-storage';

const UserForm = ({ history, type }) => {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    avatar: null,
  });
  const loginRef = useRef(null);
  const signupRef = useRef(null);
  useEffect(() => {
    if (type === 'signup') {
      signupRef.current.focus();
    } else {
      loginRef.current.focus();
      console.log(loginRef);
    }
  }, [type]);

  const onSubmit = (e, userData) => {
    e.preventDefault();

    if (type === 'login') {
      logIn(userData).then((res) => {
        if (res.token) {
          saveAuthToken(res.token);
          // set up state/contextAPI to store user info such as name, email, age, etc.
          history.push('/dashboard');
        }
      });
    }

    if (type === 'signup') {
      signUp(userData).then((res) => {
        if (res.token) {
          saveAuthToken(res.token);
          // set up state/contextAPI to store user info such as name, email, age, etc.
          history.push('/dashboard');
        }
      });
    }
  };

  let signupInputs;

  type === 'signup'
    ? (signupInputs = (
        <React.Fragment>
          <input
            ref={signupRef}
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            required
          />
          <br />
          <input
            type="text"
            name="age"
            placeholder="Enter age"
            onChange={(e) => setUserData({ ...userData, age: e.target.value })}
          />
          <br />
        </React.Fragment>
      ))
    : (signupInputs = null);

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e, userData)}>
        {signupInputs}
        <input
          ref={loginRef}
          type="text"
          name="email"
          placeholder="Enter email"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
