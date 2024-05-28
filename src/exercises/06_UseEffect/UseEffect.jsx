import { useState, useEffect } from 'react';

// Aufgabe:
// 1. Verwenden Sie den `useEffect` Hook, um eine Konsolennachricht "Count has changed" anzuzeigen, wenn sich der Wert von `count` ändert.

export default function Counter() {
    
    const [count, setCount] = useState(0);

    // 1. Verwenden Sie den `useEffect` Hook, um eine Konsolennachricht "Count has changed" anzuzeigen, wenn sich der Wert von `count` ändert.
    

    
    function incrementCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>useEffect Übung</h1>
            <p>Aktueller Zählerstand: {count}</p>
            <button onClick={incrementCount}>Erhöhe Zähler</button>
        </div>
    );
}
