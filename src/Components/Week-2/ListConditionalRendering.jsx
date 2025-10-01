function Item({name,isPacked}){
   let result =isPacked?<span className="line-through">${name} ✅`</span>:`${name}`;
   return <li>{result}</li>
}
function Greet({isEmplyee,name}){
    return <li>{isEmplyee? `Hey! ${name}` :`${name}`}</li>
}
function DisplayMessage({isLoggin}){
    let result =isLoggin===false ? "Please Login":"Welcome back";
    return result
}
function EnableBtn({isEnable}){
    return isEnable&& <button className="bg-blue-100">Clickme</button>

}
function ListConditionalRendering(){
    return(
        <section>
        <h1 className="bg-red-100">Sally Ride's Packing List</h1>
        <ul>
            <Item isPacked={true}
            name={"Space suit"}/>
            <Item isPacked={true}
            name={"Helmet with a golden leaf"}/>
            <Item isPacked={false}
            name={"Photo of Tam"}/>
            <Greet isEmplyee={true}
            name={"Nivi"}/>
            <Greet isEmplyee={false}
            name={"Athi"}/>
            <DisplayMessage isLoggin={false}/>
            
        </ul>
        <EnableBtn isEnable={true}/>
    </section>
    )
    
}
export default ListConditionalRendering