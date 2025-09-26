import { useRef, useState } from "react"

function Stopwatch(){
    const [time,setTime]=useState(0)
    const[isRunning,setIsRunning]=useState(false)
    const intervalRef=useRef(null)
    function handleStart(){
      if(!isRunning){
        setIsRunning(true)
        intervalRef.current=setInterval(()=>{
            setTime(t=>t+10) // increse by 10
        },10) // ticks evert 10 ms
      }  
    }
    function handleStop(){
        setIsRunning(false)
        clearInterval(intervalRef.current)
    }
    function handleRest(){
        setIsRunning(false)
        clearInterval(intervalRef.current)
        setTime(t=>0)
    }
    // Conver time to HH:MM:SS
    function formateTime(){
        let hours=Math.floor(time/(1000*60*60))
        let minutes=Math.floor(time/(1000*60)%60)
        let seconds=Math.floor(time/(1000)%60)
        let milliSeconds=Math.floor((time%1000)/10)  // / 10 is to show the first 2 digits
    return `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}:${String(milliSeconds).padStart(2,"0")}`
    } 
    return(
        <div>
            <h1>{formateTime()}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleRest}>Reset</button>
        </div>
    )
}
export default Stopwatch