// Aufgabe:
// 1. Erstellen Sie eine neue Komponente `ChildComponent`, welche die Nachricht vom ParentComponent erhält.
// 2. Integriere die ChildComponent und übergebe die Message.

export default function ParentComponent() {
    const message = "Hello from Parent";
  
    return (
      <div>
        <h1>07 Sharing Data - Parent Component</h1>
        <ChildComponent message={message} />
      
      </div> 
    );
  }
  
  function ChildComponent({ message }) {
    return (
      <div>
        <h2>Child Component</h2>
        <p>{message}</p>
      </div>
    );
  }
  