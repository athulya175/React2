import { useEffect, useState } from "react"

function UseEffect(){
    const[count,setCount]=useState(0)
    const[color,setColor]=useState("green")

/*    
    useEffect(()=>{
        document.title=`count:${count}` // initial render + every re-render
    },)
*/

/*
    useEffect(()=>{
        document.title="My counter program" // update the title only once
    },[])
*/

/*
    useEffect(()=>{
        document.title=`count ${count}`
    },[count])    // here it updates the value only when the count's value  changes 
*/

/*
    useEffect(()=>{
        document.title=`count ${count} ${color}`
    },[color,count])
*/

// if we remove the use effect then also the title updates
    document.title=`count ${count},${color}`

    /* so this is working then why we using use effect
        1) it feels like code more organizable
        2) through this we can tell exacly when that code should run(if we don't use useEffect then every single time regardless every time the component rerends it updates)
        3) We can perfrom some clean-up code
    */


function substractCount(){
    setCount(c=>c-1)
}
function handleCount(){
        setCount(c=>c+1)
}
function handleColor(){
    setColor(color==="green"?"red":"green")
}
    return(
        <>
            <p style={{color:color}}>Count:{count}</p>
            <button onClick={handleCount}>Add</button>
            <button onClick={substractCount}>Sub</button>
            <button onClick={handleColor}>Change Color</button>
        </>
    )
}
export default UseEffect