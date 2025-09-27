import { useState } from "react"

export default function Searchfilter(){
const name=["Isha","Niya","Miya","Mizhi"]
const[search,setSearch]=useState("")
function searchHandler(e){
    setSearch(e.target.value)
}
const filteredName=name.filter((nme)=>{
    return nme.toLowerCase().includes(search.toLowerCase())
})
return(
    <>
    <input type="text" value={search} onChange={searchHandler}/>
    <ul>
        {filteredName.map(x=><li>{x}</li>)}
    </ul>
    </>
)
}
