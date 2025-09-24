import ButtonStyle2 from "./Button/ButtonStyle2"
import ButtonStyleInline from "./Components/ButtonStyleInline"
import Button from "./Components/ButtonStyle"
import Card from "./Components/Card"
import ColorPick from "./Components/Colorpicup"
import ConditionUser from "./Components/ConditionUser"
import Counter from "./Components/Counter"
import EventButton from "./Components/EventButton"
import EventOnchange from "./Components/EventOnchange"
import EventOnchhange from "./Components/EventOnchange"
import EventProfile from "./Components/EventProfile"
import Food from "./Components/Food"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import List from "./Components/List"
import Students from "./Components/Students"
import Qbutton from "./Problems/Qbutton"
import Qnested from "./Problems/Qnested"
import Qprofile from "./Problems/Qprofile"
import Qsum from "./Problems/QsumOfTwoNum"
import UpdateObjState from "./Components/updateObjState"
import UpdateArrayState from "./Components/updateArrayState"
function App() {
  const fruits=[{id:1,name:"apple",calories:95},{id:2,name:"orange",calories:45},{id:3,name:"coconut",calories:159},{id:4,name:"banana",calories:210}]
    const veg=[{id:5,name:"potato",calories:110},{id:2,name:"celery",calories:15},{id:3,name:"carrot",calories:25},{id:4,name:"corn",calories:21}]
    const car=[]
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

    {/* <ConditionUser isLoggedIn={false} username="Athulya"/>
    {fruits.length>0&&<List item={fruits} category="fruit"/>}
   {veg.length>0 && <List item={veg} category="Vegitable"/>}
    {car.length>0&&<List item={car} category="Car"/>} */}
    
      {/* <EventButton/>
      <EventProfile/> */}

      {/* <Counter/>
      <EventOnchange/> */}

      {/* <ColorPick/> */}

      {/* <UpdateObjState/> */}

      <UpdateArrayState/>
    </>
  )
}

export default App
