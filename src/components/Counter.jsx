import React, { useState, useEffect } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);
  const [dynamicClass, setDynamicClass] = useState('text');

  // First iteration
  const handleIncrease = () => {
    setCount(prev => prev + 1)
  } 

  const handleDecrease = () => {
    setCount(prev => prev - 1)
  } 

  // Second and Fourth iteration

  useEffect(() => {
    // set the initial count to a random number between 0 and 10
    setCount(Math.floor(Math.random() * 10));

    return () => {
      console.log('All clean here. Count:', count, 'Class:', dynamicClass);
      setCount(0);
      setDynamicClass('text');
    }

  }, []);

  // Third iteration

  useEffect(() => {
    // update the dynamic class based on the current value of count
    if (count <= 0) {
      setDynamicClass('red');
    } else if (count >= 1 && count <= 5) {
      setDynamicClass('orange');
    } else {
      setDynamicClass('green');
    }
  }, [count]);



  return (
    <div>
      <p>Counter: <span className={dynamicClass}>{count}</span></p>
      <button onClick={handleIncrease}>+ Increase</button>
      <button onClick={handleDecrease}>- Decrease</button>
    </div>
  )
}
