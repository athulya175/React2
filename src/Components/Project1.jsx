import { useState } from "react"

function Project1(){
   
    const[cars,setCar]=useState([])
    const[caryear,setYear]=useState(new Date().getFullYear())
    const[carmake,setMake]=useState("")
    const[carmodal,setModal]=useState("")
    function handleAddCar(){
        const newcar={year:caryear,make:carmake,modal:carmodal}
        setCar(c=>[...c,newcar])
        setYear("")
        setMake("")
        setModal("")
    }
    function handleRemoveCar(index){
        setCar(c=>c.filter((_,i)=>i!==index))
    }
    function handleYearChange(event){
        setYear(event.target.value)
    }
    function handleMakeChanege(event){
        setMake(event.target.value)
    }
    function handleModelChange(event){
        setModal(event.target.value)
    }
    return(
        <div>
             <h2>List of car Object</h2>
            <input type="number" value={caryear} onChange={handleYearChange}></input><br/>
            <input type="text" value={carmake} onChange={handleMakeChanege}></input><br/>
            <input type="text" value={carmodal} onChange={handleModelChange} ></input><br/>
            <button onClick={handleAddCar}>Add Car</button>
            <ul>
                {cars.map((car,index)=><li key={index} onClick={()=>handleRemoveCar(index)}>{car.year} {car.make} {car.modal}</li>)}
            </ul>
        </div>
    )
}
export default Project1