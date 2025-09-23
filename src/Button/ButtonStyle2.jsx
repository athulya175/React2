
import styles from './Buttonstyle.module.css'
function ButtonStyle2(){
    return(
        <button className={styles.button2}>click me</button>
    )
}
export default ButtonStyle2
// the thing about module is that it avoids naming conflicts because a unique class is going to be generated its generated via hash (look for the class name in inspect)
