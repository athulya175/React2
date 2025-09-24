import Button from "../Components/ButtonStyle"

function Card3({title,description,image}){
    return(
        <div className="card">
            <h1 className="title">{title}</h1>
            <p className="text">{description}</p>
            <img src={image} className="profile"/>
            <Button/>
        </div>
    )
}
export default Card3

