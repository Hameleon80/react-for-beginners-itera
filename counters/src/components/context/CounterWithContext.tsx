import { ShowTime } from "./ShowTime";
import { useTimerContext } from './myHook'

export function CountersWithContext() {
  const {isStarted, handlerOnStart, handlerOnStop} = useTimerContext();
  document.title = isStarted ? 'Timer started' : 'Timer';

  return (
    <div>
      <h1>Counter with hooks</h1>
      <ShowTime />
      <br />
      <button disabled={isStarted} onClick={handlerOnStart} type="button"><h3>START </h3></button>
      <button onClick={handlerOnStop} type="button"><h3>STOP </h3></button>
    </div>
  )
}