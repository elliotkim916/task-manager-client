import React, { useRef, useEffect, useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { createTask } from '../../api';
import { Context as TasksContext } from '../../context/TasksContext';

const CreateForm = ({ setShowCreate, setShowCreateCompleteModal }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const { createTaskAction } = useContext(TasksContext);

  return (
    <Formik
      initialValues={{ description: '', details: '', completed: '' }}
      validationSchema={Yup.object({
        description: Yup.string().required('Description is required..'),
        completed: Yup.string().required(
          'Completion information is required..'
        ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        // createTask({ ...values }).then(() => window.location.reload());
        createTaskAction(values);
        setShowCreate(false);
        setShowCreateCompleteModal(true);
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
        <ErrorMessage name="completed" />
        <br />
        <button type="submit">Create Task</button>
        <button type="button" onClick={() => setShowCreate(false)}>
          Cancel
        </button>
      </Form>
    </Formik>
  );
};

export default CreateForm;
