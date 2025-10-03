import { useState } from "react"

export default function ParentCallBackCompComm(){
    const[message,setMesssage]=useState("")
    function handleChildData(childData){
        setMesssage(childData)
    }
    return(
        <>
        <h1>Parent Message:{message}</h1>
        <ChildComponent dataForParent={handleChildData}/>
        </>
    )
}

function ChildComponent({dataForParent}){
    const handleClick=()=>{
        dataForParent("hello from child")
    }
    return <button onClick={handleClick}>Send Message</button>
}
