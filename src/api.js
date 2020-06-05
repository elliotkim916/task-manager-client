import axios from 'axios';
import { TASK_SERVERSIDE_ENDPOINT } from './config';
import { loadAuthToken, clearAuthToken } from './local-storage';

// user requests
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

// task requests
export const getTasks = () => {
  const authToken = loadAuthToken();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  };

  return axios.get(`${TASK_SERVERSIDE_ENDPOINT}/tasks`, {
    headers
  })
  .then(res => res.data);
};

export const getTask = (id) => {
  const authToken = loadAuthToken();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  };

  return axios.get(`${TASK_SERVERSIDE_ENDPOINT}/tasks/${id}`, {
    headers
  })
  .then(res => res.data);
};

export const deleteTask = (id) => {
  const authToken = loadAuthToken();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  };

  return axios.delete(`${TASK_SERVERSIDE_ENDPOINT}/tasks/${id}`, {
    headers
  })
  .then(res => {
    if (res.status === 200) {
      return console.log('Delete successful');
    }
  });
};

export const updateTask = (id, updatedTask) => {
  const authToken = loadAuthToken();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  };

  return axios.patch(`${TASK_SERVERSIDE_ENDPOINT}/tasks/${id}`, {
    description: updatedTask.description,
    details: updatedTask.details,
    completed: updatedTask.completed
  },
  { headers })
  .then(res => res.data);
};