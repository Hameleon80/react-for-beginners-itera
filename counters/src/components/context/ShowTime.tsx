import { useContext } from "react"
import { TimerCtx } from "./store";

export function ShowTime() {
  const { startTime, currentTime } = useContext(TimerCtx)

  let time = currentTime - startTime;
  const seconds = time > 0 ? Math.floor((time % (1000 * 60)) / 1000) : 0;
  const minutes = time > 0 ? Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)) : 0;
  const houres = time > 0 ? Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : 0;

  return (
    <div>
      {houres >= 10 ? houres : '0' + houres} :  {minutes >= 10 ? minutes : '0' + minutes} : {seconds >= 10 ? seconds : '0' + seconds}
    </div>
  )
}