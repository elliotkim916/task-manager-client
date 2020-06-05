import React from 'react';
import { deleteTask } from '../../api';

const DeleteForm = ({ id, setShowDeleteModal, history }) => {
  return (
    <div>
      <form>
        <h3>Are you sure you would like to delete this task?</h3>
        <button 
          type="button" 
          onClick={() => {
            deleteTask(id);
            history.push('/dashboard');
          }}
        >
          Yes
        </button>
        <button 
          type="button" 
          onClick={() => setShowDeleteModal(false)}
        >
          No
        </button>
      </form>
    </div>
  );
};

export default DeleteForm;