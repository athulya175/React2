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
import Project1 from "./Components/Project1"
import ToDoList from "./Components/ToDolist"
import Card3 from "./Task/Card3"
import Parent from "./Task/Parent3"
import UseEffect from "./Components/UseEffect"
import WindowWidthHeight from "./Components/UseEffectWidthHeight"
import DigitalClock from "./Components/DigitalClock"
import ComponentA from "./Components/ComponentA"
import ComponentB from "./Components/ComponentB"
import ComponentC from "./Components/ComponentC"
import ComponentD from "./Components/ComponentD"
import UseRef from "./Components/UseRef"
import Counter4 from "./Task/Counter4"
import Stopwatch from "./Components/StopWatch"
import ButtonDev from "./ReactDev/ButtonDev"
import UserProfile from "./ReactDev/Userprofile"
import CheckLogin from "./ReactDev/CheckLogin"
import RenderingList from "./ReactDev/RenderingLists"
import RespondingToEvent from "./ReactDev/RespondingToEvent"
import CounterDev from "./CounterDev"
import { useState } from "react"
import TicTacToe from "./ReactDev/TicTacToe"
import ToogleVisibility from "./Problems/ToogleVisibility"
import QFormHandling from "./Problems/QFormHandling"
import QcolorChange from "./Problems/QcolorChanger"
import QFetch from "./Problems/QfetchFromAPI"
import Searchfilter from "./Problems/SearchFilter"
import FilterFetch from "./Problems/SearchFetch"
import DarkLightToogle from "./Problems/DarkLightToogle"
import ToDoListTask from "./Task/ToDoList"
import ToDoFetch from "./Task/ToDoFetch"
function App() {
  const fruits=[{id:1,name:"apple",calories:95},{id:2,name:"orange",calories:45},{id:3,name:"coconut",calories:159},{id:4,name:"banana",calories:210}]
    const veg=[{id:5,name:"potato",calories:110},{id:2,name:"celery",calories:15},{id:3,name:"carrot",calories:25},{id:4,name:"corn",calories:21}]
    const car=[]

    const [count,setCount]=useState(0)
    function ClickHandler(){
        setCount(c=>c+1)

    }
    function ClickDecrement(){
      setCount(c=>c-1)
    }
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

      {/* <UpdateArrayState/> */}

      {/* <Project1/> */}

      {/* <ToDoList/> */}

      {/* <Card3 title="woods Job" description="A directionless young man joins a forestry training program after failing college exams and, through challenges and nature, discovers purpose, community, and self-growth." image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ9PSvMFQhEgpqUEwJgPj_vguwXr73_ikwaGE_tUkJhPiHFEiUNWX3rp87aliWqLViivIwdR0Ub9vmJFI3D2w7xcZAyzoqK9nnrdz07QuB4VQ"/>
        <Parent/> */}

        {/* <UseEffect/> */}

        {/* <WindowWidthHeight/> */}

        {/* <DigitalClock/> */}

        {/* <ComponentA/> */}

        {/* <UseRef/> */}

        {/* <Counter4/> */}

        {/* <Stopwatch/> */}

        {/* <ToogleVisibility/> */}

        {/* <QFormHandling/> */}

        {/* <QcolorChange/> */}

        {/* <QFetch/> */}

        {/* <Searchfilter/> */}

        {/* <FilterFetch/> */}

        {/* <DarkLightToogle/> */}

        {/* <ToDoListTask/> */}

        <ToDoFetch/>
        
        {/* ---------------React dev----------------- */}
      {/* <h1>welcome to my App</h1>
        <ButtonDev/> */}
        
        {/* <UserProfile/> */}

        {/* <CheckLogin/> */}

        {/* <RenderingList/>
        <RespondingToEvent/> */}  

        {/* <h1>Counters that update together</h1>
        <CounterDev count={count} onClick={ClickHandler}/>
        <CounterDev count={count} onClick={ClickHandler}/>
        <CounterDev count={count} onClick={ClickDecrement}/> */}

        {/* <TicTacToe/> */}
    </>
  )
}

export default App
