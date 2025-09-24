import { useState } from "react"

function ColorPick(){
    const [color,setColor]=useState('#ffffff')
    function handleColorChange(e){
        setColor(e.target.value)
    }
    return(
        < div className="color-layout">
            <h1>Color picker</h1>
        <div className="color-container" style={{backgroundColor:color}}>
            <p className="color-text">Selected Color:{color}</p>
        </div>
        <input type="color" onChange={handleColorChange} value={color} className="color-bar"/>
        </div>
    )
}
export default ColorPick