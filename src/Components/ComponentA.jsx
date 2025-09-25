/*    
    import { useState } from "react"
    import ComponentB from "./ComponentB"

    function ComponentA(){
        const[user,setUser]=useState("BroCode")
            return(
                <div className="component-box">
                    <h1>Component A</h1> 
                    <h2>{`Hello ${user}`}</h2>
                    <ComponentB user={user}/>  
                </div>
            )
    }
    export default ComponentA
*/
// create context(here A is the provider component)
    /* Provider Component
        1. import{createContext} from 'react'
        2.export const MyContext=createContext()
        3.<MyContext.Provider value={value}>
            <child/>
          <MyContext.Provider>
    */
import { createContext, useState } from "react"
import ComponentB from "./ComponentB"
export const UserContext=createContext()
function ComponentA(){
    const[user,setUser]=useState("BroCode")
        return(
            <div className="component-box">
                <h1>Component A</h1> 
                <h2>{`Hello ${user}`}</h2>
                <UserContext.Provider value={user}>
                     <ComponentB user={user}/>  
                </UserContext.Provider>
               
            </div>
        )
}
export default ComponentA