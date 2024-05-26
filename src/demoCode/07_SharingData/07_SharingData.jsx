export default function ParentComponent() {
    const message = "Hello from Parent";
  
    return (
      <div>
        <h1>Parent Component</h1>
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