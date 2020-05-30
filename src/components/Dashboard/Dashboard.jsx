import React from 'react';
import { clearAuthToken } from '../../local-storage';

const Dashboard = (props) => {
  return (
    <div>
      <button 
        type="button" 
        onClick={() => {
          clearAuthToken();
          props.history.push('/');
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