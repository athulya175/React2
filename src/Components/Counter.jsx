/*
    import { useState } from "react"

    function Counter(){
        let [count,setCount]=useState(0)
        function handleIncrement(){
        setCount(count+1)
        }
        function handleDecrement(){
            setCount(count-1)
        }
        function handleReset(){
            setCount(0)
        }
        return(
        <>
        <h1 className="countval">{count}</h1>
            <button onClick={handleDecrement} className="countbtn">Decrement</button>
            <button onClick={handleReset}className="countbtn">Reset</button>
            <button onClick={handleIncrement}className="countbtn">Increment</button>
        </>
        )

    }
    export default Counter
*/
import { useState } from "react"

function Counter(){
    let [count,setCount]=useState(0)
    function handleIncrement(){

    /*
       setCount(count+1)
       setCount(count+1)
       setCount(count+1)
    */

       /*insted incrementing one by one it doesn't increment that way , it increments as like
        setCount(0+1)
        setCount(0+1)
        setCount(0+1) so we use an updater function for naming convention use the first letter of the state variable*/

        setCount(c=>c+1)
        setCount(c=>c+1)
        setCount(c=>c+1)

        // by using the updator function ,
        // Takes the Pending state to calculate next state.
        //React puts your updater function in a queue(waiting in line) inted of bunching all of them together
        // During the next render,it will call them in the same order.
    }
    function handleDecrement(){
        setCount(c=>c-1)
    }
    function handleReset(){
        setCount(0)
    }
    return(
    <>
    <h1 className="countval">{count}</h1>
        <button onClick={handleDecrement} className="countbtn">Decrement</button>
        <button onClick={handleReset}className="countbtn">Reset</button>
        <button onClick={handleIncrement}className="countbtn">Increment</button>
    </>
    )

}
export default Counter