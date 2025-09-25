import { useEffect, useState } from "react"

function WindowWidthHeight(){
    const[width,setWidth]=useState(window.innerWidth)
    const[height,setHeight]=useState(window.innerHeight)
function handleResize(){
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
}
/*
    // with out using useEffect hook
        window.addEventListener("resize",handleResize)
        console.log("Event Listener Added")
    // here the problem is that when look to the console we can  see when ever we resize there creating a event handler.we dont need like that insted of we need only one event listner.
*/
useEffect(()=>{
    window.addEventListener("resize",handleResize)
        console.log("Event Listener Added")
        // clean up 
        return()=>{
            window.removeEventListener("resize",handleResize)
            console.log("Event listnener deleted")
        }
},[])
useEffect(()=>{
    document.title=`Width:${width}`
},[width])
// here a event listner is added only when component mount
    return(
        <>
            <p>window Width:{width}</p>
            <p>Window Height:{height}</p>
        </>
    )
}
export default WindowWidthHeight