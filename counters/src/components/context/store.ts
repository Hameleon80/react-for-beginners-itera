
export type Timer = {
    houres: number,
    setHoures: (hr: number) => void,
    minutes: number,
    setMinutes: (mn: number) => void,
    seconds: number,
    setSeconds: (sec: number) => void,
    isStarted: boolean,
    setIsStarted: (isStart: boolean) => void
  };