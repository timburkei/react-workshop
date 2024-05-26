import React from 'react';

// Aufgabe:
// 1. Erstellen Sie ein Objekt `product` mit den folgenden Eigenschaften:
//    - name: 'Laptop'
//    - price: 999.99
//    - image: 'https://via.placeholder.com/150'
// 2. Verwenden Sie JSX, um die Produktinformationen anzuzeigen:
//    - Zeigen Sie den Namen des Produkts in einem <h1>-Tag an.
//    - Zeigen Sie den Preis des Produkts in einem <h2>-Tag an.
//    - Zeigen Sie das Produktbild in einem <img>-Tag an, wobei der src-Attribut auf `product.image` gesetzt ist und alt-Attribut auf "product image" gesetzt ist.

export default function DisplayProduct() {
    const product = {
        name: 'Laptop',
        price: 999.99,
        image: 'https://via.placeholder.com/150'
    }

    return (
        <div>
            <h1>02 Display Product</h1>
            <h1>{/* Hier name */}</h1>
            <h2>{/* Hier price */}</h2>
            {/* <img src=... alt="product image" /> */}
        </div>
    )
}
