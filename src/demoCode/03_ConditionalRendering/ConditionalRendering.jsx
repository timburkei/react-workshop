import { useState } from 'react';

function LightOn() {
  return <div style={{ color: 'yellow' }}>💡 The light is ON</div>;
}

function LightOff() {
  return <div style={{ color: 'gray' }}>💡 The light is OFF</div>;
}

function App() {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn(prevState => !prevState);
  };

  return (
    <div className="App">
      <h1>Light Switch</h1>
      {isLightOn ? <LightOn /> : <LightOff />}
      <button onClick={toggleLight}>
        {isLightOn ? 'Turn off' : 'Turn on'}
      </button>
    </div>
  );
}

export default App;
