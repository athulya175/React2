import Card from "../Components/Card"

function Qprofile(props){
    return (
        <div className="profile">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>{props.age>18?"Adult":"Minor"}</p>
            <Card/>
        </div>
    )
}
export default Qprofile