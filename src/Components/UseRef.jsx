/*    
    import { useEffect, useRef, useState } from "react"

    function UseRef(){
        //let [number,setNumber]=useState(0)        // we can use useRef insted of useState
        const ref=useRef(0)
        useEffect(()=>{
            console.log("Component Renderd")
        })
        function handleClick(){
            // setNumber(n=>n+1)     
            //ref.current=ref.current+1  //using  use ref 
            ref.current++ // we can use increment operator also insted of adding separatly
            console.log(ref.current)
        }
    return(
        <button onClick={handleClick}>Click me</button>
    )
    }
    export default UseRef
*/  
    /* if we use useState then it triggers re-render on update,But in case of useRef it won't
        useState is best for Ui state and useRef is for storing values,DOM refs.   
    */

        // demonstration to create an input element
    import { useEffect, useRef, useState } from "react"

    function UseRef(){
        //let [number,setNumber]=useState(0)        // we can use useRef insted of useState
        const inputRef1=useRef(null)
        const inputRef2=useRef(null)
        const inputRef3=useRef(null)
        useEffect(()=>{
            console.log("Component Renderd")
            console.log(inputRef1)
        })
        function handleClick1(){
           inputRef1.current.focus()
           inputRef1.current.style.backgroundColor="Pink"
           inputRef2.current.style.backgroundColor=""
           inputRef3.current.style.backgroundColor=""
        }
        function handleClick2(){
           inputRef2.current.focus()
           inputRef2.current.style.backgroundColor="Pink"
            inputRef1.current.style.backgroundColor=""
           inputRef3.current.style.backgroundColor=""
        }
        function handleClick3(){
           inputRef3.current.focus()
           inputRef3.current.style.backgroundColor="Pink"
            inputRef2.current.style.backgroundColor=""
           inputRef1.current.style.backgroundColor=""
        }
    return(
        <>
            <button onClick={handleClick1}>Click me 1</button>
             <button onClick={handleClick2}>Click me 2</button>
              <button onClick={handleClick3}>Click me 3</button>
            <input type="text" ref={inputRef1}/>
               <input type="text" ref={inputRef2}/>
                  <input type="text" ref={inputRef3}/>
        </>
        
    )
    }
    export default UseRef

    // when we click the button to get focused the component doesn't re-render because we are using use ref
    
