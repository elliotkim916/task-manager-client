import React, { useState, useEffect, useContext, useCallback } from 'react';
import { logOut } from '../../api';
import RequiresLogin from '../../HOC/RequiresLogin';
import Task from '../Task/Task';
import CreateForm from '../Forms/CreateForm';
import { Context as TasksContext } from '../../context/TasksContext';
import { getTasks } from '../../api';

const Dashboard = ({ history }) => {
  const [showCreate, setShowCreate] = useState(false);
  const [showCreateCompleteModal, setShowCreateCompleteModal] = useState(false);
  const { getTasksAction, state } = useContext(TasksContext);

  useEffect(() => {
    if (state.length === 0) {
      getTasks().then((tasks) => getTasksAction(tasks));
    }
  }, [getTasksAction, state]);

  let allTasks;
  allTasks = state.map((task) => (
    <Task task={task} key={task._id} history={history} />
  ));

  let showCreateForm, createCompleteModal;
  if (showCreate) {
    showCreateForm = (
      <CreateForm
        setShowCreate={setShowCreate}
        setShowCreateCompleteModal={setShowCreateCompleteModal}
      />
    );
  } else {
    showCreateForm = null;
  }

  if (showCreateCompleteModal) {
    createCompleteModal = (
      <div>
        <h3>Your task has been successfully saved!</h3>
        <button type="button" onClick={() => setShowCreateCompleteModal(false)}>
          Okay
        </button>
      </div>
    );
  } else {
    createCompleteModal = null;
  }

  console.log('Dashboard render');
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

        <h1>Welcome to the Dashboard</h1>

        <button type="button" onClick={() => setShowCreate(true)}>
          Create Task
        </button>
        <br />
        <br />
        <br />

        {showCreateForm}
        {createCompleteModal}
        {allTasks}
      </div>
    </RequiresLogin>
  );
};

export default Dashboard;
