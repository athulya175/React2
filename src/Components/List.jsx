// array
/*
    function List(){
        const fruits=["apple","orange","coconut"]
        const listItems=fruits.map(x=><li>{x}</li>)
        return(<ol>{listItems}</ol>)
    }
    export default List
*/

/*
// objects
 function List(){
        const fruits=[{id:1,name:"apple",calories:95},{id:2,name:"orange",calories:45},{id:3,name:"coconut",calories:159},{id:4,name:"banana",calories:210}]
       // fruits.sort((a,b)=>a.name.localeCompare(b.name)) // for Alphabetical order
      //fruits.sort((a,b)=>b.name.localeCompare(a.name)) // Reverse alphabetic order
        fruits.sort((a,b)=>a.calories-b.calories) // Numeric

        // filter
        const lowCalories=fruits.filter(frt=>frt.calories<100)
        const highCal=fruits.filter(x=>x.calories>=100)
        const listItems=fruits.map(x=><li key={x.id} >{x.name} - Calories : {x.calories}</li>)
        const lowCalList=lowCalories.map(x=><li key={x.id}>{x.name}:{x.calories}</li>)
        const highCalList=highCal.map(x=><li key={x.id}>{x.name}:{x.calories}</li>)
        return(
            <>
        <ol>{listItems}</ol>
        <ul>{lowCalList}</ul>
        <ol>{highCalList}</ol>
        </>
    )
    }
    export default List
*/

// making the List component reusable for all list

function List(props){
        const itemList=props.item
        const category=props.category
        const listItems=itemList.map(x=><li>{x.name}:{x.calories}</li>)
        return(
        <>
        <h3 className="list-title">{category}</h3>
        <ol className="list-item">{listItems}</ol>
        </>)
    }
    export default List