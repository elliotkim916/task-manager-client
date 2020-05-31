import React from 'react';
import { logOut } from '../../api';

const Dashboard = ({ history }) => {
  return (
    <div>
      <button 
        type="button" 
        onClick={() => {
          logOut();
          history.push('/');
        }}
      >
        Log Out
      </button>
      <h1>Welcome!</h1>
      <h3>Dashboard</h3>
    </div>
  );
};

export default Dashboard;