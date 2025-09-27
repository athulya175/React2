import { useState } from "react"

function QcolorChange(){
    const[color,setColor]=useState("#ffffff")
    function handleColorChange(e){
        setColor(e.target.value)
    }
    return(
        <>
        <div style={{border:"1px solid black",width:"200px",height:"200px",marginBottom:"10px",backgroundColor:color}}></div>
        <input type="color" value={color} onChange={handleColorChange}/>
        </>

    )
}
export default QcolorChange
