import React, { useState } from 'react';

// Aufgabe:
// 1. Erstellen Sie einen neuen Zustand (state) `count` mit einem Anfangswert von 0.
// 2. Fügen Sie einen Button hinzu, der bei jedem Klick den Wert von `count` um 1 erhöht.
// 3. Zeigen Sie den aktuellen Wert von `count` in einem <p>-Tag an.
// 4. Fügen Sie einen zweiten Button hinzu, der den Wert von `count` auf 0 zurücksetzt.

export default function Counter() {
    // 1. Erstellen Sie einen neuen Zustand (state) `count` mit einem Anfangswert von 0.
    

    // 2. Funktion, die den Wert von `count` um 1 erhöht
    

    // 4. Funktion, die den Wert von `count` auf 0 zurücksetzt


    return (
        <div>
            <h1>useState Übung</h1>
            {/* 3. Zeigen Sie den aktuellen Wert von `count` in einem <p>-Tag an. */}
            <p>Aktueller Zählerstand: </p>
            {/* 2. Fügen Sie einen Button hinzu, der bei jedem Klick den Wert von `count` um 1 erhöht. */}
            <button>Erhöhe Zähler</button>
            {/* 4. Fügen Sie einen zweiten Button hinzu, der den Wert von `count` auf 0 zurücksetzt. */}
            <button>Zähler zurücksetzen</button>
        </div>
    );
}
