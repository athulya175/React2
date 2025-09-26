const products=[
    {title:"Cabbage",id:1,isFruit:false},
    {title:"Garlic",id:2,isFruit:false},
    {title:"Apple",id:3,isFruit:true},
]
function RenderingList(){
    let listItem=products.map(x=><li key={x.id} style={{color:x.isFruit?"green":"red"}}>{x.title}</li>)
    return(
        <div >{listItem}</div>
    )
}
export default RenderingList