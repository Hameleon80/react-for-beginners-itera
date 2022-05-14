import { observer } from "mobx-react";
import { useState } from "react";
import { ShowTimeWithMobx } from "./ShowTimeMobx";
import TimerStore from "./timerStoreMobx";


export const CounterWithMobx = observer(() => {

    const [intervalId, setIntervalId] = useState(0)

    function handlerOnStart() {
        TimerStore.setIsStarted(true);
        const newIntervalId = window.setInterval(() => {
            TimerStore.incrementSeconds();
        }, 1000)
        setIntervalId(newIntervalId);
    }

    function handlerOnStop() {
        TimerStore.setIsStarted(false);
        clearInterval(intervalId);
    }

    document.title = TimerStore.isStarted ? 'Timer started' : 'Timer';

    return (
        <div>
            <h1>Counter with Mobx</h1>
            <ShowTimeWithMobx />
            <br />
            <button onClick={handlerOnStart} disabled={TimerStore.isStarted ? true : false}><h3>START</h3></button>
            <button onClick={handlerOnStop}><h3>STOP</h3></button>

        </div>
    )
})