function RespondingToEvent(){
   const handlePrompt=()=>{
        alert("Are you sure to leave the page")
    }
    return(
        <button onClick={handlePrompt}>Leave page</button>
    )
}
export default RespondingToEvent