import { useState, useEffect } from 'react';

// Link: https://react.dev/learn/lifecycle-of-reactive-effects#each-effect-represents-a-separate-synchronization-process

export default function MyApp() {
  return (
    <div>
      <h1>Show Title</h1>
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(`You clicked count: ${count} times`);

    return () => {
      console.log('Component with count unmounted');
    }
  }, [count]);

  useEffect(() => {
    console.log(`You clicked count2: ${count2} times`);
    return () => {
      console.log('Component with count2 unmounted');
    }
  }, [count2]);

  useEffect(() => {
    console.log(`Component MyButton loaded`);

    return () => {
      console.log('Component MyButton unloaded');
    }
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        Clicked {count2} times
      </button>
    </div>
  );
}
