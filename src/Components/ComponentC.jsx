/*
    import ComponentD from "./ComponentD"
        function ComponentC(props){
            return(
                <div className="component-box">
                    <h1>Component C</h1>
                    <ComponentD user={props.user}/>
                </div>
            )
        }
    export default ComponentC
*/
// we are using create context so now we dont need to pass props

import { useContext } from "react"
import ComponentD from "./ComponentD"
import { UserContext } from "./ComponentA"
        function ComponentC(){
            const user=useContext(UserContext)
            return(
                <div className="component-box">
                    <h1>Component C</h1>
                    <p>{`Bye${user}`}</p>
                    <ComponentD/>
                </div>
            )
        }
    export default ComponentC