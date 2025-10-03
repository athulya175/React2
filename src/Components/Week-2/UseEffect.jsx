import React, { useEffect, useState } from "react";
import axios from "axios";
/*
export default function UseEffectCount(){
    const [count,setCount]=useState(0)
  useEffect(()=>{
     document.title=`count:${count}`   
    },[count])
    function incrementCount(){
        setCount(c=>c+1)
    }
    function decrementCount(){
        setCount(c=>c-1)
    }
    return(
        <>
        <p>count:{count}</p>
        <button onClick={incrementCount}>Add</button>
        <button onClick={decrementCount} className="ml-10">Decrement</button>
        </>
    )
}
*/

/*
    // Event listner

    export default function UseEffectSizeChange(){
    const [width,setWidth]=useState(window.innerWidth) 
    const[height,setHeight]=useState(window.innerHeight)
    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    useEffect(()=>{
        addEventListener("resize",handleResize)
        console.log("event listner created")

        // clean-up
        return()=>{
            window.removeEventListener("resize",handleResize)
            console.log("event listner removed")
        }
    },[])
    useEffect(()=>{
        document.title=`Size:${width} X ${height}`
    },[height,width])
    return(<>
        <p>Width:{width}</p>
        <p>Height:{height}</p>
    </>
    )
    }
*/

/*
    export default function UseEffectInFetch(){
        const [datas,setDatas]=useState([])
        useEffect(()=>{
            const fetchData=async()=>{
                try{
                const res= await axios.get("https://jsonplaceholder.typicode.com/users")
                setDatas(res.data)
            }
            catch(err){
                console.log("can't fetch",err)
            }
            }
            fetchData() 
        },[])
        return(
            <ul>
                {datas.map(x=><li key={x.id}>{x.name}</li>)}
            </ul>
        )
    }

*/

export default function UseEffectInTimers(){
    const[count,setCount]=useState(0)
    function Time(){
        setCount(c=>c+1)
    }
    useEffect(()=>{
        let timer=setInterval(()=>{
            Time()
        },1000)
        return()=>clearInterval(timer)
    },[])
    return(
        <>
        <p>{count}</p>
        </>
    )
}

