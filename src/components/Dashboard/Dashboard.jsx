import React, { useState, useEffect } from 'react';
import { logOut } from '../../api';
import RequiresLogin from '../../HOC/RequiresLogin';
import { getTasks } from  '../../api';
import Task from '../Task/Task';
import CreateForm from '../Forms/CreateForm';

const Dashboard = ({ history }) => {
  const [tasks, setTasks] = useState([]);
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    getTasks()
      .then(res => setTasks([...res]));
  }, []);

  let allTasks;
  allTasks = tasks.map(task => <Task task={task} key={task._id} history={history} />);

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
        
        <button type="button" onClick={() => setShowCreate(true)}>Create Task</button><br/><br/><br/>
        
        { showCreate ? <CreateForm setShowCreate={setShowCreate}/> : null }
        { allTasks }
      </div>
    </RequiresLogin>
  );
};

export default Dashboard;