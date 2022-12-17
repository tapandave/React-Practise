import { useState, useEffect } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(false);
  const startCounter = () => setStart(true);
  const resetCounter = () => {
    setStart(false);
    setCounter(0);
  }
  
  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);
  
  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={startCounter}>Start Counter</button>&nbsp;
      <button onClick={() => setStart(false)}>Pause Counter</button>&nbsp;
      <button onClick={() => resetCounter()}>Reset Counter</button><br/>&nbsp;
    </div>
  );
}
