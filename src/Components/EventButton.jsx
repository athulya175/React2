function EventButton(){
    let count=0
    const handleClick=()=>{
        console.log("Ouch")
        count++
        console.log(count)
    }
    const handleClick2=(name)=>console.log(`${name} stop clicking me`)
    const handleClick3=(e)=>e.target.textContent="Ouch"
    return(
        <>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={handleClick2("Athulya")}>Click here</button>   if we call like this it will involk before clicking  so we need to wrap it inside a function expression or with in a arrow function*/}
            <button onClick={()=>handleClick2("Athulya")}>Click here</button>
            <button onDoubleClick={(e)=>handleClick3(e)}>Click</button>
        </>
        
    )
}
export default EventButton