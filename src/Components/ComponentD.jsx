/*    
    function ComponentD(props){
        return(
            <div className="component-box">
                <h1>Component D</h1>
                <h2>{`Bye ${props.user}`}</h2>
            </div>
        )
    }
    export default ComponentD
*/



// we are using create context so now we dont need to pass props
// Component D is the  Consumer Components
/*
    1.import React,{useContext} from 'react'
            import{MyContext} from './Component'
    2. Const value=useContext(MyContext)
*/

import { useContext } from "react"
import { UserContext } from "./ComponentA"
function ComponentD(){
    const user=useContext(UserContext)
    return(
        <div className="component-box">
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>${err}
        </div>
    )
}
export default ComponentD




