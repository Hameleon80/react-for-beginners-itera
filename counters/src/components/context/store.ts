
export type Timer = {
    startTime: number,
    setStartTime: (hr: number) => void,
    currentTime: number,
    setCurrentTime: (mn: number) => void,
  };

  export const defaultData: Timer = {
    startTime: Date.now(),
    setStartTime: (hr: number) => {},
    currentTime: Date.now(),
    setCurrentTime: (mn: number) => {}
  }