import React from 'react';

const Task = ({ task }) => {
  if (task) {
    return (
      <div key={task._id}>
        <h1>Description: {task.description}</h1>
        <h3>Completed: {task.completed}</h3>
        <h3>Created At: {task.createdAt}</h3>
      </div>
    );
  } else {
    return null;
  }
};

export default Task;