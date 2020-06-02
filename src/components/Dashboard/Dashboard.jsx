import React, { useState, useEffect } from 'react';
import { logOut } from '../../api';
import RequiresLogin from '../../HOC/RequiresLogin';
import { getTasks } from  '../../api';
import Task from '../Task/Task';

const Dashboard = ({ history }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks()
      .then(res => setTasks([...res]));
  }, []);

  let allTasks;
  allTasks = tasks.map(task => <Task task={task} key={task._id}/>);

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

        <h1>Welcome to the Dashboard!</h1>

        { allTasks }
      </div>
    </RequiresLogin>
  );
};

export default Dashboard;