import { useState } from "react"

// controlled text Input,checkbox, radio,Dropdown
export default function FormHandling(){
    const[name,setName]=useState("")
    const[ischecked,setChecked]=useState(false)
    const[gender,setGender]=useState(" ")
    const[skill,setSkill]=useState()
    const handleChange=(e)=>{
        setName(e.target.value)
       
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert(`Name sumbitted:${name}`)
         setName(" ")
        
    }
    const handleCheck=(e)=>{
        setChecked(e.target.checked)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input type="text" placeholder="Enter Your name " value={name} onChange={handleChange} className="border"/>
            </label><br/>
            <label>Accept Terms:
                <input type="checkbox"
                checked={ischecked}
                onChange={handleCheck}/>
            </label><br/>
            <label>
                <input type="radio"
                value="male"
                checked={gender==="male"}
                onChange={(e)=>setGender(e.target.value)}
                />
                Male
            </label>
                <label>
                    <input type="radio"
                    value="female"
                    checked={gender==="female"}
                    onChange={(e)=>setGender(e.target.value)}
                    />
                    Female
                </label>
                <p>Selected Gender:{gender}</p>
                <select value={skill} onChange={(e)=>setSkill(e.target.value)}>
                    <option value="select one">Select one</option>
                    <option value="React">React</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Laravel">Laravel</option>
                </select>
                <p>Selected skill:{skill}</p>
            <button type="sumbit" className="border mt-10 p-1">Submit</button>
        </form>
    )
}
