import { useState } from "react"

function DarkLightToogle(){
    const[theme,setTheme]=useState("day")
    function handleTheme(){
        setTheme(theme=="dark"?"day":"dark")
    }
    return(
    <div className={theme} style={{width:"100vw",height:"100vh", background:`${theme=="dark"?"black":"white"}`,color:`${theme=="dark"?"white":"black"}`}}>
        <h1>Welcome</h1>
        <button onClick={handleTheme}>Click for {theme} mode</button>
    </div>
    )
}
export default DarkLightToogle