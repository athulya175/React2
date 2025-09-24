import { useState } from "react"

function UpdateArrayState(){
    const[foods,setFoods]=useState(["Apple","Orange","Banana"])
    function handleAddFood(){
        const newFood=document.getElementById("foodInput").value
        document.getElementById("foodInput").value=''
        setFoods(f=>[...f,newFood])
    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=>i!==index))
    }
     return(
        <div>
            <h2>List of Food</h2>
            <input type="text" placeholder="Type here..." id="foodInput"/><button onClick={handleAddFood}>Add Food</button>
            <ul>{foods.map((food,index)=><li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}</ul>
        </div>
    )
}
export default UpdateArrayState

