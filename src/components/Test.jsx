import React, { useState, useEffect, useRef } from 'react';
import ViewCount from './ViewCount';
// import TasksContext from '../context/TasksContext';

// class Test extends React.Component {
//   render() {
//     let value = this.context;
//     console.log(value);
//     return <div></div>;
//   }
// }

// // contextType
// Test.contextType = TasksContext;

const Test = (props) => {
  const [count, setCount] = useState(0);
  const countRef = useRef();
  const intervalRef = useRef();

  useEffect(() => {
    countRef.current = count;

    intervalRef.current = setInterval(() => {
      console.log('God is good, all the time');
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  });

  const clearIntervalEventHandler = () => {
    clearInterval(intervalRef.current);
  };

  console.log('Test Render');
  return (
    <React.Fragment>
      <ViewCount count={count} />
      <button type="button" onClick={() => setCount(count + 1)}>
        ADD ONE
      </button>
      <button type="button" onClick={clearIntervalEventHandler}>
        CLEAR
      </button>
    </React.Fragment>
  );
};

export default Test;
