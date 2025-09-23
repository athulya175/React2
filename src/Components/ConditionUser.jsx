function ConditionUser(props){
   return props.isLoggedIn?<h2 className="contrue">Welcome {props.username}</h2>:<h2 className="confalse">Please log in</h2>
}
export default ConditionUser