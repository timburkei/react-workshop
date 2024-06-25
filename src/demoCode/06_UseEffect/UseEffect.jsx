import { useState, useEffect } from 'react';

// Link: https://react.dev/learn/lifecycle-of-reactive-effects#each-effect-represents-a-separate-synchronization-process



export default function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(`You clicked count: ${count} times`);

    
  }, [count]);

  useEffect(() => {
    console.log(`You clicked count2: ${count2} times`);
  
  }, [count2]);

  useEffect(() => {
    console.log(`Component MyButton loaded`);

    return () => {
      console.log('Component MyButton unloaded');
    }
  }, []);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={incrementCount}>
        Clicked {count} times
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        Clicked {count2} times
      </button>
    </div>
  );
}
