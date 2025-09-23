import ButtonStyle2 from "./Button/ButtonStyle2"
import ButtonStyleInline from "./ButtonStyleInline"
import Button from "./Components/ButtonStyle"
import Card from "./Components/Card"
import Food from "./Components/Food"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Students from "./Components/Students"
function App() {
  return(
    <>
    {/* <Header/>
    <Food/>
    <Footer/> */}

    {/* <Card/>
    <Card/>
    <Card/> */}
    
    <Button/>
    <ButtonStyle2/>
    <ButtonStyleInline/>

    <Students name="Athulya" age={21} isStudent={true}/>
    <Students name="Patric" age={29} isStudent={"false"}/>
    <Students />
    </>
  )
}

export default App
