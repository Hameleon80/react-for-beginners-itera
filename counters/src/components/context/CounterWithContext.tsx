import { useContext, useState } from "react";
import { TimerCtx } from "../../App";
import { ShowTime } from "./ShowTime";

export function CountersWithContext() {
  const { houres, minutes, seconds, isStarted, setIsStarted, setSeconds, setMinutes, setHoures } = useContext(TimerCtx);
  document.title = isStarted ? 'Timer started' : 'Timer'
  const [intervalId, setIntervalId] = useState(0)

  const handlerOnStart = () => {
    setIsStarted(true);
    let countSeconds = seconds;
    let countMinutes = minutes;
    let countHoures = houres;
    
    const id = window.setInterval(() => {
      setSeconds(++countSeconds);
      if(countMinutes === 60){
        countMinutes = 0;
        setHoures(++countHoures);
      }
      if (countSeconds === 60){
        countSeconds = 0;
        setMinutes(++countMinutes);
      }
    }, 1000);
    
    setIntervalId(id);
  }

  const handlerOnStop = () => {
    setIsStarted(false);
    clearInterval(intervalId);
  }

  return (
    <div>
      <h1>Counter with hooks</h1>
      <ShowTime />
      <br />
      <button disabled={isStarted ? true: false} onClick={handlerOnStart} type="button"><h3>START </h3></button>
      <button onClick={handlerOnStop} type="button"><h3>STOP </h3></button>
    </div>
  )
}