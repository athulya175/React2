import { useEffect, useState } from "react"

export default function QFetch(){
    const [datas,setDatas]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>{
        setDatas(data)
        setIsLoading(false)
    })
    .catch((err)=>{
        console.log("cant fetch",err)
    })
    },[])
    
    if(isLoading){
        return<h1>Loading.......</h1>
    }
    return(
        <ul>
            {datas.map(x=><li key={x.id}>{x.title}</li>)}
        </ul>
    )
}
