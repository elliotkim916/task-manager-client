import React, { useState, useEffect } from 'react';
import { getTask } from '../../api';
import DeleteForm from '../Forms/DeleteForm';
import UpdateForm from '../Forms/UpdateForm';
import AsyncComponent from '../../HOC/AsyncComponent';

const AsyncNewTest = AsyncComponent(() => {
  return import('../Test');
});

const ViewTask = (props) => {
  const [task, setTask] = useState({});

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteCompleteModal, setShowDeleteCompleteModal] = useState(false);

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showUpdateCompleteModal, setShowUpdateCompleteModal] = useState(false);

  useEffect(() => {
    getTask(props.match.params.id).then((data) => {
      setTask({ ...data });
    });
  }, [props]);

  let deleteModal, deleteCompleteModal, updateModal, updateCompleteModal;

  if (showDeleteModal) {
    deleteModal = (
      <DeleteForm
        id={props.match.params.id}
        setShowDeleteModal={setShowDeleteModal}
        setShowDeleteCompleteModal={setShowDeleteCompleteModal}
        history={props.history}
      />
    );
  } else {
    deleteModal = null;
  }

  if (showDeleteCompleteModal) {
    deleteCompleteModal = (
      <div>
        <h3>Your task was successfully deleted!</h3>
        <button type="button" onClick={() => props.history.push('/dashboard')}>
          Okay
        </button>
      </div>
    );
  } else {
    deleteCompleteModal = null;
  }

  if (showUpdateModal) {
    updateModal = (
      <UpdateForm
        task={task}
        setShowUpdateModal={setShowUpdateModal}
        setShowUpdateCompleteModal={setShowUpdateCompleteModal}
        history={props.history}
      />
    );
  } else {
    updateModal = null;
  }

  if (showUpdateCompleteModal) {
    updateCompleteModal = (
      <div>
        <h3>Your update is complete!</h3>
        <button type="button" onClick={() => props.history.push('/dashboard')}>
          Okay
        </button>
      </div>
    );
  } else {
    updateCompleteModal = null;
  }

  const { completed, description, details, createdAt } = task;

  return (
    <div>
      <button type="button" onClick={() => setShowDeleteModal(true)}>
        Delete
      </button>
      <h1>{description}</h1>
      <p>{details}</p>
      <p>Completed : {String(completed)}</p>
      <p>{createdAt}</p>

      <button type="button" onClick={() => setShowUpdateModal(true)}>
        Update Task
      </button>

      {updateModal}
      {updateCompleteModal}
      {deleteModal}
      {deleteCompleteModal}
      <AsyncNewTest />
    </div>
  );
};

export default ViewTask;
