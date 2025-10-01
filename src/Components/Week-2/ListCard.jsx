function ListCards({name,proff,img}){
    return(
        <div className="flex flex-col border-2 max-w-100 p-10 mb-5">
            <img src={img} className=""/>
            <h1 className="text-2xl">Name:{name}</h1>
            <p>Proffession:{proff}</p>
            
        </div>
    )
}
export default ListCards