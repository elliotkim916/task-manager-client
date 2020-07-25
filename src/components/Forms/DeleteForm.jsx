import React, { useContext } from 'react';
// import { deleteTask } from '../../api';
import { Context as TasksContext } from '../../context/TasksContext';

const DeleteForm = ({
  id,
  setShowDeleteModal,
  setShowDeleteCompleteModal,
  history,
}) => {
  const { deleteTaskAction } = useContext(TasksContext);

  return (
    <div>
      <form>
        <h3>Are you sure you would like to delete this task?</h3>
        <button
          type="button"
          onClick={() => {
            // deleteTask(id);
            deleteTaskAction(id);
            setShowDeleteModal(false);
            setShowDeleteCompleteModal(true);
            // history.push('/dashboard');
          }}
        >
          Yes
        </button>
        <button type="button" onClick={() => setShowDeleteModal(false)}>
          No
        </button>
      </form>
    </div>
  );
};

export default DeleteForm;
