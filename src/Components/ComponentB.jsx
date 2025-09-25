/*
    import ComponentC from "./ComponentC"

    function ComponentB(props){
        return(
            <div className="component-box">
                <h1>Component B</h1>
                <ComponentC user={props.user}/>
            </div>
        )
    }
    export default ComponentB
*/

// we are using create context so now we dont need to pass props
    import ComponentC from "./ComponentC"

    function ComponentB(){
        return(
            <div className="component-box">
                <h1>Component B</h1>
                <ComponentC />
            </div>
        )
    }
    export default ComponentB