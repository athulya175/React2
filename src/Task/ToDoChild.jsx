function TaskItem({task,toogle,onRemove}){
    return(
        <li className="toDoLists">
                <input type="checkbox" 
                    checked={task.completed} 
                    onChange={()=>toogle(task.id)}
                />
                <span style={{textDecoration:task.completed?"line-through":"none"}}>
                    {task.title}
                </span>
                <button className="btnRemove" 
                    onClick={()=>onRemove(task.id)}>X</button>
            </li>)}
    
export default TaskItem