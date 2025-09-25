import { number } from "prop-types"
import { useEffect, useState } from "react"

function DigitalClock(){
    const [time,setTime]=useState(new Date())
    useEffect(()=>{
        const IntervalId=setInterval(()=>{
            setTime(new Date())
        },1000)
        return()=>{
            clearInterval(IntervalId)
        }
    },[])
function formateTime(){
    let hours=time.getHours()
    let minutes=time.getMinutes()
    let seconds=time.getSeconds() 
    const meridiem=  hours>=12?"PM":"Am"
    hours=hours%12||12 // here we converting in to 0-12 insted of 0-23 (hours=13-->13/12=1 so its one,if hours=12 then 12%12=0 we dont want to display zero so insted of that we display 12)
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(meridiem)}`
    function padZero(number){
        return (number<10?"0":"")+number
    }
}
    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formateTime()}</span>
            </div>
        </div>
    )
}
export default DigitalClock
