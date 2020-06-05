import React, { useState, useEffect } from 'react';
import { getTask } from '../../api';
import DeleteForm from '../Forms/DeleteForm';
import UpdateForm from '../Forms/UpdateForm';

const ViewTask = (props) => {
  const [task, setTask] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    getTask(props.match.params.id)
      .then(data => {
        setTask({...data});
      });
  }, [props]);
  
  let deleteModal, updateModal;

  if (showDeleteModal) {
    deleteModal = <DeleteForm id={props.match.params.id} setShowDeleteModal={setShowDeleteModal} history={props.history} />
  } else {
    deleteModal = null;
  }

  if (showUpdateModal) {
    updateModal = <UpdateForm task={task} setShowUpdateModal={setShowUpdateModal} history={props.history} />;
  } else {
    updateModal = null;
  }

  const { completed, description, details, createdAt } = task;

  return (
    <div>
      <button type="button" onClick={() => setShowDeleteModal(true)}>Delete</button>
      <h1>{description}</h1>
      <p>{details}</p>
      <p>Completed : {String(completed)}</p>
      <p>{createdAt}</p>

      <button type="button" onClick={() => setShowUpdateModal(true)}>Update Task</button>

      {updateModal}
      {deleteModal}
    </div>
  );
};

export default ViewTask;