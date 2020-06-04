import React, { useState, useEffect } from 'react';
import { getTask } from '../../api';
import DeleteForm from '../Forms/DeleteForm';

const ViewTask = (props) => {
  const [task, setTask] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getTask(props.match.params.id)
      .then(data => {
        setTask({...data});
      });
  }, [props]);
  
  let showDeleteModal;
  if (showModal) {
    showDeleteModal = <DeleteForm id={props.match.params.id} setShowModal={setShowModal} history={props.history} />
  } else {
    showDeleteModal = null;
  }

  const { completed, description, details, createdAt } = task;

  return (
    <div>
      <button type="button" onClick={() => setShowModal(true)}>Delete</button>
      <h1>{description}</h1>
      <p>{details}</p>
      <p>Completed : {String(completed)}</p>
      <p>{createdAt}</p>

      {showDeleteModal}
    </div>
  );
};

export default ViewTask;