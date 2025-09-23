/*    
    import PropTypes from 'prop-types'
    function Students(props){
        return(
            <div className="student">
                <p>Name:{props.name}</p>
                <p>Age:{props.age}</p>
                <p>Student:{props.isStudent?"yes":"No"}</p>
            </div>
        )
    }
    Students.propTypes={
        name:PropTypes.string,
        age:PropTypes.number,
        isStudent:PropTypes.bool,
    }
    Students.defaultProps={
        name:"Guest",
        age:0,
        isStudent:false
    }
    export default Students
*/

// to get default value we need to be destructure it
import PropTypes from 'prop-types'
function Students({name="guest",age=30,isStudent=false}){
    return(
        <div className="student">
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Student:{isStudent?"yes":"No"}</p>
        </div>
    )
}
Students.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
}
Students.defaultProps={
    name:"Guest",
    age:0,
    isStudent:false
}
export default Students