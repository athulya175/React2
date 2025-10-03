import { useEffect, useState } from "react"

export default function Timer(){
   
    const [count,setCount]=useState(0)
    useEffect(()=>{
         console.log("Use effect runs")
        const timer=setInterval(()=>{
            setCount(c=>c+1)
        },1000)
        return()=>clearInterval(timer)
    },[count])
    return(
        <div className="flex items-center justify-center  flex-col text-2xl p-8 ">
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)} className="border p-3 mt-10 cursor-pointer">Increase</button>
        
        </div>
    )
}