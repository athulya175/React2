import { useState } from "react"

function ToDoListTask(){
   const[tasks,setTasks]=useState([])
   const[newTask,setNewTask]=useState("")

   function  handleTask(event){
    setNewTask(event.target.value)
   }
   function handleAddTask(){
    if(newTask.trim()==="")return
    setTasks(t=>[...t,{text:newTask,completed:false}])
    setNewTask(" ")
   }
   function handleRemoveTask(index){
    setTasks(tasks.filter((_,i)=>i!==index))
   }
   function handleTaskMark(index){
    const updatedTasks=[...tasks];
    updatedTasks[index].completed=!updatedTasks[index].completed
    setTasks(updatedTasks)
    
   }
   return(
    <div className="toDoContainer">
        <h1>TO DO LIST</h1>
    <input type="text" value={newTask} onChange={handleTask} placeholder="Enter task here"/>
    <button onClick={handleAddTask} className="btnAdd">Add Task</button>
    <div className="listContainer">
    <ul className="todoUl">
        {tasks.map((x,index)=><li key={index} className="toDoLists"><input type="checkbox" checked={x.completed} onChange={()=>handleTaskMark(index)}/><span style={{textDecoration:x.completed?"line-through":"none"}}>{x.text}</span><button className="btnRemove" onClick={()=>handleRemoveTask(index)}>X</button></li>)}
    </ul>
    </div>
    </div>
   )
}
export default ToDoListTask




