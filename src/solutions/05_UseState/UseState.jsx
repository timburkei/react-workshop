import React, { useState } from 'react';

// Aufgabe:
// 1. Erstellen Sie einen neuen Zustand (state) `count` mit einem Anfangswert von 0.
// 2. Fügen Sie einen Button hinzu, der bei jedem Klick den Wert von `count` um 1 erhöht.
// 3. Zeigen Sie den aktuellen Wert von `count` in einem <p>-Tag an.
// 4. Fügen Sie einen zweiten Button hinzu, der den Wert von `count` auf 0 zurücksetzt.

export default function Counter() {
    // 1. Erstellen Sie einen neuen Zustand (state) `count` mit einem Anfangswert von 0.
    const [count, setCount] = useState(0);

    // 2. Funktion, die den Wert von `count` um 1 erhöht
    function incrementCount() {
        setCount(count + 1);
    }

    // 4. Funktion, die den Wert von `count` auf 0 zurücksetzt
    function resetCount() {
        setCount(0);
    }

    return (
        <div>
            <h1>useState Übung</h1>
            {/* 3. Zeigen Sie den aktuellen Wert von `count` in einem <p>-Tag an. */}
            <p>Aktueller Zählerstand: {count}</p>
            {/* 2. Fügen Sie einen Button hinzu, der bei jedem Klick den Wert von `count` um 1 erhöht. */}
            <button onClick={incrementCount}>Erhöhe Zähler</button>
            {/* 4. Fügen Sie einen zweiten Button hinzu, der den Wert von `count` auf 0 zurücksetzt. */}
            <button onClick={resetCount}>Zähler zurücksetzen</button>
        </div>
    );
}
