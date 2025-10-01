
export default function Rendering({array, title,value}){
    return(
        <div>
            <h2>{title}</h2>
            <ul>
            {array.map(arr=><li key={arr.id}>{arr[value]}</li>)}
            </ul>
        </div>
    )
}