import { useState } from "react"

export default function Registrationform(){
    const[names,setNames]=useState("")
    const[emails,setEmalils]=useState("")
    const[pass,setPass]=useState("")
    const[isSubmited,setSubmited]=useState(false)
    const [message,setMessage]=useState("")
    function handleChange(e){
        e.preventDefault()
        setSubmited(true)
         if(!names.trim()||!emails.trim()||!pass.trim()){
            setMessage("All field must me filled")
            setSubmited(false)
            return
        } 
        setMessage("")
        setSubmited(true)
        setNames("")
        setEmalils("")
        setPass("")
        
    }
   const DisplayDetails=({names,emails,pass})=>{
        return(
        <div className="p-8 ">
            <p>Name:{names}</p>
            <p>Email:{emails}</p>
            <p>Password:{pass}</p>
            <p className="text-green-700">Form succesfully </p>
        </div>
    )
    } 
    return(
        <div className="flex flex-col items-center p-8">
            <h1 className="text-red-700 text-xl ">Registration Form</h1>
            <form onSubmit={handleChange} className="flex flex-col items-center p-8 border w-3xs justify-center bg-blue-200 mt-10 border " >
            <input type="text" placeholder="Enter your name" value={names} onChange={(e)=>{setNames(e.target.value); setSubmited(false) }} className="p-2 border mb-5 bg-blue-100"/>
            <input type="email" placeholder="Enter Your email" value={emails} onChange={(e)=>{setEmalils(e.target.value); setSubmited(false)}} className="p-2 border mb-5 bg-blue-100" />
            <input type="password" placeholder="Enter your pasword" value={pass} onChange={(e)=>{setPass(e.target.value);setSubmited(false)}} className="p-2 border mb-5 bg-blue-100"/>
            <button type="submit" className="cursor-pointer">Submit</button>
            </form>
            {isSubmited&&
                <DisplayDetails names={names}
            emails={emails}
            pass={pass}/>
            }  
        </div>
    )
}



