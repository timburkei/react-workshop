import React from 'react';

// Aufgabe:
// 1. Integriere in den Button ein Event, mit dem Namen handleClick.


export default function Event() {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <div>
            <h1>04 Events</h1>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}
