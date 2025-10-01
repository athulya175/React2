import { useState } from "react"

export default function LoginToogle(){
    const[login,SetLogin]=useState(false)
    const result=login?"Welcome Back":"Please login"
    function handleLogIn(){
        SetLogin(true)
    }
    function handleLogOut(){
        SetLogin(false)

    }
    return(
        <>
           <h1>{result}</h1> 
           <div className="flex gap-3 mt-10">
            {!login?  (
            <button onClick={handleLogIn} className="bg-green-700 border p-1 text-white">
                Log in
                </button>
            ):(
                <button onClick={handleLogOut} className="bg-red-700 border p-1 text-white">Log out</button>
            )}
            
            
           </div>
        </>
    )
}