import { useState } from "react"

function ToDoList(){
    const [task,setTask]=useState([])
    const [newTask,setNewTask]=useState("")
    function handleTask(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        setTask(t=>[...t,newTask])
        setNewTask("")
    }
    function removeTask(index){
        setTask(task.filter((_,i)=>i!==index))
    }
    return(
       <div>
         <input type="text" onChange={handleTask}/><button onClick={addTask} >Add Task</button>
         <ul>{task.map((tsk,index)=><li key={index} onClick={()=>removeTask(index)}>{tsk}</li>)}</ul>
       </div>
    )
}
export default ToDoList