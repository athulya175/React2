import { useState } from "react"

function Counter4(){
    let[count,setCount]=useState(0)
    function handleIncrement(){
        setCount(c=>c+1)
    }
    function handleDecrement(){
        setCount(c=>c-1)
    }
    function handleReset(){
        setCount(count=0)
    }
    return(
        <div>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default Counter4