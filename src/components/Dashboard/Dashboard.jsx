import React from 'react';
import { logOut } from '../../api';
import RequiresLogin from '../../HOC/RequiresLogin';

const Dashboard = ({ history }) => {
  return (
    <RequiresLogin>
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
    </RequiresLogin>
  );
};

export default Dashboard;