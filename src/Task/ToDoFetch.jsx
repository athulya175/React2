import { useEffect, useState } from "react"

function ToDoFetch(){
   const[tasks,setTasks]=useState([])
   const[newTask,setNewTask]=useState("")
   const[loading,setLoading]=useState(true)

   function  handleTask(event){
    setNewTask(event.target.value)
   }
   function handleAddTask(){
    if(newTask.trim()==="")return
    const newTaskObj={
        id:Date.now(),
        title:newTask,
        completed:false
    }
    setTasks([newTaskObj,...tasks])
    setNewTask("")
   }
   function handleRemoveTask(id){
    setTasks(tasks.filter((tsk)=>tsk.id!==id))
   }
   function handleTaskMark(id){
    setTasks(tasks.map((task)=>
        task.id===id?{...task,completed:!task.completed}:task
    ))
   }
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res=>res.json())
    .then(data=>{
        setTasks(data)
        setLoading(false)
        console.log("render")
    })
   },[])
   if(loading){
    return<h1>Loading...</h1>
   }
   return(
    <div className="toDoContainer">
        <h1>TO DO LIST</h1>
        <input type="text" 
            value={newTask} 
            onChange={handleTask} 
            placeholder="Enter task here"
        />
    <button onClick={handleAddTask} className="btnAdd">Add Task</button>
    <div className="listContainer">
    <ul className="todoUl">
        {tasks.map(x=><li key={x.id} className="toDoLists"><input type="checkbox" checked={x.completed} onChange={()=>handleTaskMark(x.id)}/><span style={{textDecoration:x.completed?"line-through":"none"}}>{x.title}</span><button className="btnRemove" onClick={()=>handleRemoveTask(x.id)}>X</button></li>)}
    </ul>
    </div>
    </div>
   )
}
export default ToDoFetch




