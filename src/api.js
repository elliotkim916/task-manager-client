import axios from 'axios';
import { TASK_SERVERSIDE_ENDPOINT } from './config';
import { loadAuthToken, clearAuthToken } from './local-storage';

export const signUp = (userInfo) => {
  const { name, age, email, password, avatar } = userInfo;

  return axios.post(`${TASK_SERVERSIDE_ENDPOINT}/users`, {
    name,
    email,
    password,
    age,
    avatar
  })
  .then(res => res.data);
};

export const logIn = (userInfo) => {
  const { email, password } = userInfo;

  return axios.post(`${TASK_SERVERSIDE_ENDPOINT}/users/login`, {
    email,
    password
  })
  .then(res => res.data);
};

export const logOut = () => {
  const authToken = loadAuthToken();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  };

  return axios.post(`${TASK_SERVERSIDE_ENDPOINT}/users/logout`, {}, {
    headers
  })
  .then(res => {
    if (res.status === 200) {
      clearAuthToken();
    }
  });
};