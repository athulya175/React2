function ButtonStyleInline(){
    const styles={
        backgroundColor: "antiquewhite",
        color: "green",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }
    return(
            <button style={styles}>Click me</button>
    )
}
export default ButtonStyleInline

// we created a js variable(styles) inside in dont use - insted  of that use camel case and values must be string and seperated by comma

// by using inline styling is convenient and easy to understand it prevent Global style conflict because we are not working with clases ,but it readuce the readability if there is more  css and its not great for any complex styling such as responsive css