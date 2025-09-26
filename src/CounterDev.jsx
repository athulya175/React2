import { useState } from "react"

function CounterDev({count,onClick}){
/*
    const [count,setCount]=useState(0)
    function ClickHandler(){
        setCount(c=>c+1)
    }
*/
    return(
        <>
            <button onClick={onClick}>Clicked {count} Times</button>
            

        </>   
    )
}
export default CounterDev