const { useState } = React;

export default function Count() {
  const [count, setCounts] = useState(0);

  return (
    <>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCounts(count + 1)}>+</button>
      <button onClick={() => setCounts(count - 1)}>-</button>
      <button onClick={() => setCounts(0)}>Reset</button>
    </>
  );
}

// const domContainer = document.querySelector('#count');
// const root = ReactDOM.createRoot(domContainer);

// root.render(<Count />)
