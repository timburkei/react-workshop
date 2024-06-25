import React from 'react';
import MyButton from '../MyButton/MyButton';

// Aufgabe:
// 1. Erstelle im Ordner MyButton eine Datei namens MyButton.jsx
// 2. Erstelle in React Format ein Button Element. Denke an return und export default.
// 3. Importiere MyButton in MyApp.
// 4. Füge MyButton in MyApp ein.


export default function MyApp() {
    return (
        <>
            <div>
               <h1>01 Nesting Components</h1>
               <MyButton />
            </div>
        </>
    );
}
