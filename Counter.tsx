import { useState, useEffect } from 'react';

export default function App() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const startTimer = () => setStart(true);
  const resetTimer = () => {
    setStart(false);
    setTime(0);
  }
  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);
  return (
    <div>
      <h1>Timer</h1>
      <p>{`${("0" + Math.floor((time / 60000) % 60)).slice(-2)} mins : ${("0" + Math.floor((time / 1000) % 60)).slice(-2)} secs`}</p>
      <button onClick={startTimer}>Start Timer</button>&nbsp;
      <button onClick={() => setStart(false)}>Pause Timer</button>&nbsp;
      <button onClick={() => resetTimer()}>Reset Timer</button><br/>&nbsp;
    </div>
  );
}
