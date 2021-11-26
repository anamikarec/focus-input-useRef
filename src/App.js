import './App.css';
import React, { useState, useEffect, useRef } from 'react';
function App() {
  var [time,setTime] = useState(0);
  const timerRef = useRef(null);
  var [end,setEnd] = useState(null);
  useEffect(()=>{
    return pauseTimer;
  },[])
  const startTimer = () =>{
    if(timerRef.current === null){
      timerRef.current = setInterval(()=>{
        setTime((prev) => prev+1);
        endTimer();
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
  const handleChange = (e) =>{
   //console.log( e.target.value)
   var num = Number(e.target.value);
   setTime(num);
  }
  
  const handleChange2 = (e) =>{
   //console.log( e.target.value)
   var  end = Number(e.target.value);
   setEnd(end);
  }
  const endTimer = () =>{
    console.log(time,end);
    time = time+1;
    if(time === end){
    clearInterval(timerRef.current);
    timerRef.current = null;
    }
    // end--;
  }
  
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h3>{time}</h3>
      <label>Enter Start Time: </label>
      <input type="number" placeholder="Enter start time" onChange={handleChange} className="form-input" />
      <br/>
      <label>Enter End Time: </label>
      <input type="number" placeholder="Enter end time" onChange={handleChange2} className="form-input" />
      <br/>
      <button className="btn" onClick={startTimer}>START</button>
      <button className="btn" onClick={pauseTimer}>PAUSE</button>
      <button className="btn" onClick={resetTimer}>RESET</button>
    </div>
  );
}

export default App;
