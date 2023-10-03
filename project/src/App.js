import { useState, useEffect } from 'react';
import './App.css';



const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("You've set the counter to "+counter);
  }, [])

  return (
    <div className="App">
      <button onClick={() => setCounter( counter - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter( counter+1)}>+</button>

    </div>
  );
}

export default App;