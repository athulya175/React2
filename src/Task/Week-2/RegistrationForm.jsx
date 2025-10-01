import { useState } from "react"

export default function Registrationform(){
    const[names,setNames]=useState("")
    const[emails,setEmalils]=useState("")
    const[pass,setPass]=useState("")
    const[isSubmited,setSubmited]=useState(false)
    function handleChange(e){
        e.preventDefault()
        setSubmited(true)
    }
   const DisplayDetails=({names,emails,pass})=>{
    return(
        <div>
            <p>Name:{names}</p>
            <p>Email:{emails}</p>
            <p>Password:{pass}</p>
        </div>
    )
    
   }
    return(
        <div>
            <h1 className="bg-red-100 text-xl ">Registration Form</h1>
            <form onSubmit={handleChange} className="flex flex-col items-center p-8 border w-3xs justify-center" >
            <input type="text" placeholder="Enter your name" value={names} onChange={(e)=>setNames(e.target.value)} className="p-2 border mb-5"/>
            <input type="email" placeholder="Enter Your email" value={emails} onChange={(e)=>setEmalils(e.target.value)} className="p-2 border mb-5"/>
            <input type="password" placeholder="Enter your pasword" value={pass} onChange={(e)=>setPass(e.target.value)} className="p-2 border mb-5"/>
            <button type="submit" >Submit</button>
            </form>
            {isSubmited&&
                <DisplayDetails names={names}
            emails={emails}
            pass={pass}/>
            }
            
            
        </div>
    )
}



