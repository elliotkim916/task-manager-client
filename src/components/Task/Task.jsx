import React from 'react';
import classes from './Task.module.css';

const Task = ({ task, history }) => {
  if (task) {
    return (
      <div 
        key={task._id} 
        className={classes.taskContainer}
        onClick={() => history.push(`/task/${task._id}`)}
      >
        <h3>Description: {task.description}</h3>
      </div>
    );
  } else {
    return null;
  }
};

export default Task;