import axios from 'axios';
import { TASK_SERVERSIDE_ENDPOINT } from './config';

export const signUp = (userInfo) => {
  const { name, email, password, age, avatar } = userInfo;

  axios.post(`${TASK_SERVERSIDE_ENDPOINT}/users`, {
    name,
    email,
    password
  })
  .then(res => console.log(res));
};

export const logIn = (userInfo) => {
  const { email, password } = userInfo;

  axios.post(`${TASK_SERVERSIDE_ENDPOINT}/users/login`, {
    email,
    password
  })
  .then(res => console.log(res));
};