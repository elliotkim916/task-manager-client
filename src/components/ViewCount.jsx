import React, { useMemo } from 'react';

const ViewCount = ({ count }) => {
  const addOne = (val) => {
    return val;
  };

  const memoizedValue = useMemo(() => {
    return addOne(count);
  }, [count]);

  // console.log(memoizedValue);
  return (
    <div>
      <h3>Count: {count}</h3>
    </div>
  );
};

export default React.memo(ViewCount);
