import { useState, useEffect } from 'react';

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
    console.log(`You clicked ${count} or ${count2} times`);
  }, [count]);

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
