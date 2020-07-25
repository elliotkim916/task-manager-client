import React from 'react';
import { deleteTask, createTask, updateTask } from '../api';
import createDataContext from './createDataContext';

// const numberedTasks = [1, 2, 3];
// const TasksContext = React.createContext();
// export default TasksContext;
// console.log(TasksContext);
// console.log(TasksContext._currentValue);

const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TASKS':
      return action.payload;
    case 'CREATE_TASK':
      return [...state, action.payload];
    case 'DELETE_TASK':
      return state.filter((task) => task._id !== action.payload);
    case 'UPDATE_TASK':
      state.find((task) => {
        if (task._id === action.payload.id) {
          const index = state.indexOf(task);
          state[index] = action.payload.newTask;
          return state;
        }
      });
    default:
      return state;
  }
};

const getTasksAction = (dispatch) => (tasks) => {
  dispatch({ type: 'GET_TASKS', payload: tasks });
};

const createTaskAction = (dispatch) => async (task) => {
  const newTask = await createTask({ ...task });
  console.log(newTask);
  dispatch({ type: 'CREATE_TASK', payload: newTask });
};

const updateTaskAction = (dispatch) => async (id, updatedTask) => {
  const newTask = await updateTask(id, { ...updatedTask });
  dispatch({ type: 'UPDATE_TASK', payload: { id, newTask } });
};

const deleteTaskAction = (dispatch) => async (id) => {
  await deleteTask(id);
  dispatch({
    type: 'DELETE_TASK',
    payload: id,
  });
};

export const { Provider, Context } = createDataContext(
  tasksReducer,
  { getTasksAction, deleteTaskAction, createTaskAction, updateTaskAction },
  []
);
