import React, { useRef, useEffect, useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { updateTask } from '../../api';
import { Context as TasksContext } from '../../context/TasksContext';

const UpdateForm = ({
  task,
  setShowUpdateModal,
  setShowUpdateCompleteModal,
  history,
}) => {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const { updateTaskAction } = useContext(TasksContext);

  return (
    <Formik
      initialValues={{
        description: task.description,
        details: task.details,
        completed: task.completed,
      }}
      validationSchema={Yup.object({
        description: Yup.string().required('Description is required..'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        updateTaskAction(task._id, { ...values });
        setShowUpdateModal(false);
        setShowUpdateCompleteModal(true);
        // updateTask(task._id, { ...values }).then((data) => {
        //   if (data.completed === 'true' || data.completed === true) {
        //     history.push('/dashboard');
        //   }
        // });
      }}
    >
      <Form>
        <Field
          name="description"
          type="text"
          placeholder="Enter description"
          innerRef={inputEl}
        />
        <br />
        <ErrorMessage name="description" />
        <br />
        <Field name="details" type="text" placeholder="Enter details" />
        <br />
        <Field
          name="completed"
          type="text"
          placeholder="Task completed, true or false?"
        />
        <br />
        <button type="submit">Update Task</button>
        <button type="button" onClick={() => setShowUpdateModal(false)}>
          Cancel
        </button>
      </Form>
    </Formik>
  );
};

export default UpdateForm;
