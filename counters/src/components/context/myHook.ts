import { useContext, useRef, useState } from "react";
import { TimerCtx } from "./store";

export const useTimerContext = () => {
    //Hooks
    const [isStarted, setIsStarted] = useState(false);
    const [intervalId, setIntervalId] = useState(0);
    let timerId = useRef<number>(0);

    const { setStartTime, setCurrentTime } = useContext(TimerCtx);

    function mySetInterval(): number {
        if (window) {
            timerId.current = window.setInterval(() => {
                setCurrentTime(Date.now());
            }, 1000);
        }
        return timerId.current;
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