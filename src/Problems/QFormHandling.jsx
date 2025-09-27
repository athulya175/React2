import { useState } from "react"

function QFormHandling(){
    const [name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    function changeName(e){
        setName(e.target.value)
    }
    function changeMail(e){
        setEmail(e.target.value)
    }
    function changePass(e){
        setPass(e.target.value)
    }
    return(
        <>
        <form>
            <label>Name: </label><input type="text" placeholder="Enter your name " onChange={changeName}/><br/><br/>
            
            <label>Email: </label><input type="email" placeholder="Enter your email" onChange={changeMail}/><br/><br/>
            <label>Password: </label><input type="password" placeholder="Enter your passWord" onChange={changePass}/><br/><br/>
            <button>LogIn</button>
        </form>
        <p>Name:{name}</p>
        <p>Email:{email}</p>
        <p>Password:{pass}</p>
        </>
    )
}
export default QFormHandling