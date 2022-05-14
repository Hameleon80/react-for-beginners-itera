import { useContext } from "react"
import { TimerCtx } from "../../App"


export function ShowTime() {
    const { houres, minutes, seconds } = useContext(TimerCtx)
    return (
      <div>{houres >= 10 ? houres : '0' + houres} :  {minutes >= 10 ? minutes : '0' + minutes} : {seconds >= 10 ? seconds : '0' + seconds}</div>
    )
  }