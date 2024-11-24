import React, { useState } from 'react';
import Button from './Button';
import './styles.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1>Count: {count}</h1>
      <div className="button-group">
        <Button label="Increment" onClick={increment} />
        <Button label="Decrement" onClick={decrement} />
        <Button label="Reset" onClick={reset} />
      </div>
    </div>
  );
};

export default Counter;
