import { useEffect, useState } from "react"

export default function FilterFetch(){
    const[datas,setData]=useState([])
    const[searchby,setSearchBy]=useState("")
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])
    function handleChange(e){
        setSearchBy(e.target.value)
    }
    const filterName=datas.filter(nme=>{
       return nme.name.toLowerCase().includes (searchby.toLowerCase())
    })
    return(
        <>
            <input type="text" onChange={handleChange}/>
            <ul>
                {filterName.map(x=><li key={x.id}>{x.name}</li>)}
            </ul>
        </>
    )
}