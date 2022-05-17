import { useContext, useState } from "react";
import { TimerCtx } from "../../App";

export const useTimerContext = () => {

    const [isStarted, setIsStarted] = useState(false);
    const [intervalId, setIntervalId] = useState(0)

    const { setStartTime, setCurrentTime } = useContext(TimerCtx);

    document.title = isStarted ? 'Timer started' : 'Timer'

    function mySetInterval(): number {
        let id = 0;
        if (window) {
            id = window.setInterval(() => {
                setCurrentTime(Date.now());
            }, 1000);
        }
        return id;
    }

    const handlerOnStart = () => {
        setIsStarted(true);
        setStartTime(Date.now());
        setCurrentTime(Date.now());

        const id = mySetInterval();

        setIntervalId(id);
    }

    const handlerOnStop = () => {
        setIsStarted(false);
        clearInterval(intervalId);
    }

    return { isStarted, setIsStarted, handlerOnStart, handlerOnStop };
}