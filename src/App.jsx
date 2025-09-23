import ButtonStyle2 from "./Button/ButtonStyle2"
import ButtonStyleInline from "./ButtonStyleInline"
import Button from "./Components/ButtonStyle"
import Card from "./Components/Card"
import ConditionUser from "./Components/ConditionUser"
import Food from "./Components/Food"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import List from "./Components/List"
import Students from "./Components/Students"
import Qbutton from "./Problems/Qbutton"
import Qnested from "./Problems/Qnested"
import Qprofile from "./Problems/Qprofile"
import Qsum from "./Problems/QsumOfTwoNum"
function App() {
  return(
    <>
    {/* <Header/>
    <Food/>
    <Footer/> */}

    {/* <Card/>
    <Card/>
    <Card/> */}
    
    {/* <Button/>
    <ButtonStyle2/>
    <ButtonStyleInline/>

    <Students name="Athulya" age={21} isStudent={true}/>
    <Students name="Patric" age={29} isStudent={"false"}/>
    <Students />
    <Qprofile name="Ela" age={12}/>
    <Qprofile name="Evan" age={21}/>
    <Qprofile name="Niya" age={18}/>
    <Qsum value1={12} value2={19}/>
    <Qbutton label="Click Me"/>
    <Qbutton label="Click to see more"/>
    <Qnested/> */}
    <ConditionUser isLoggedIn={false} username="Athulya"/>
    <List/>
    </>
  )
}

export default App
