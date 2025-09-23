function Counter(){
    let count=0
    function handleIncrement(){
        count++
        return count
    }
    function handleDecrement(){
        count--
        return count
    }
    function handleReset(){
        count=0
        return count
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