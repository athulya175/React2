import { useState } from "react"
import ComponentCommunicationChild from "./ComponentComChild"

export default function ParentComponentCommunication(){
    const [count,setCount]=useState(0)
    const handleFunction=()=>{
        setCount(c=>c+1)
    }
    return(
        
        <>
        <h1>Count:{count}</h1>
        <ComponentCommunicationChild onClickFunction={handleFunction}/>
        </>
    )
}