import React, { useEffect } from 'react';
import { logOut } from '../../api';
import RequiresLogin from '../../HOC/RequiresLogin';
import { getTasks } from  '../../api';

const Dashboard = ({ history }) => {
  useEffect(() => {
    getTasks();
  }, []);

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