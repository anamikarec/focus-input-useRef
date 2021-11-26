import './App.css';
import React, { useState, useEffect, useRef } from 'react';
function App() {
  const [time,setTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(()=>{
    return pauseTimer;
  },[])
  const startTimer = () =>{
    if(timerRef.current === null){
      timerRef.current = setInterval(()=>{
        setTime((prev) => prev+1);
      },1000)
    }
  }
  const pauseTimer = () =>{
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  const resetTimer = () =>{
    pauseTimer();
    setTime(0);
  }
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h3>{time}</h3>
      <button className="btn" onClick={startTimer}>START</button>
      <button className="btn" onClick={pauseTimer}>PAUSE</button>
      <button className="btn" onClick={resetTimer}>RESET</button>
    </div>
  );
}

export default App;
