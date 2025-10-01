import { useEffect, useState } from "react"

function ListRenderingUi(){
    const [datas,setDatas]=useState([])
    const[loading,setLoading]=useState(true)
    const[errorText,setErrorText]=useState("")
    useEffect(()=>{
          fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>{
        setDatas(data)
        setLoading(false)
    })
    .catch((err)=>{
        setErrorText("failed to load")
        setLoading(false)
    })
    },[])
   if(loading) return <h1>Loading..</h1>
   if(errorText) return <h1>{errorText}</h1>
    return(
        <>
        <ul>
            {datas.map(dta=><li key={dta.id}>{dta.title}</li>)}
        </ul>
        </>
    )
}
export default ListRenderingUi