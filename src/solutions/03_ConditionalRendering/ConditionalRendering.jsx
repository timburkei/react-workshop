import { useState } from 'react';


// Aufgabe:
// Aufgabe:
// 1. Wenn man auf den Button klickt, soll sich der Zustand der Tür ändern.n Integriere dafür die Componenten DoorOpen und DoorClosed.
// 2. Füge im Button das Rendering hinzu, das den Zustand der Tür anzeigt.

function DoorOpen() {
  return <div style={{ color: 'green' }}>🟢 Die Tür ist OFFEN</div>;
}

function DoorClosed() {
  return <div style={{ color: 'red' }}>🔴 Die Tür ist GESCHLOSSEN</div>;
}

function App() {
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  const toggleDoor = () => {
    setIsDoorOpen(prevState => !prevState);
  };

  return (
    <>
      <h1>03 Conditional Rendering</h1>
      <div className="App">
        {isDoorOpen ? <DoorOpen /> : <DoorClosed />}
        <button onClick={toggleDoor}>
          {isDoorOpen ? 'Close Door' : 'Open Door'}
        </button>
      </div>
    </>
  );
}

export default App;
