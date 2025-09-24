import { useState } from "react"

function UpdateObjState(){
    const[car,setCar]=useState({year:2018,make:"Ford",model:"Mustang"}) // so here car is a object with property year,make and model
function handleYearChange(e){
    //setCar({...car,year:e.target.value})
    // making update object state
    setCar(c=>({...c,year:e.target.value})) // here we creating a object within a arrow fn so we need to surrounded it by ()
}
function handleMakeChane(e){
    //setCar({...car,make:e.target.value})
    setCar(c=>({...c,make:e.target.value}))
}
function handleModelChange(e){
    //setCar({...car,model:e.target.value})
    setCar(c=>({...c,model:e.target.value}))
}
return(
    <div>
        <p>Your favorite car is:{car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        <input type="text" value={car.make} onChange={handleMakeChane}/><br/>
        <input type="model" value={car.model} onChange={handleModelChange}/><br/>
    </div>
)
}

export default UpdateObjState