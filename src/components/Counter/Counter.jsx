import { useState } from 'react';

const Counter = () => {
  const [value, setState] = useState(0);

  const increment = () => {
    setState(value + 1);
  };

  const decrement = () => {
    setState(value - 1);
  };

  return (
    <>
      <p>{value}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export { Counter };
