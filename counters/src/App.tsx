import { createContext, useState } from 'react';
import './App.css';
import { CountersWithContext } from './components/context/CounterWithContext';
import { CounterWithMobx } from './components/mobx/CounterWithMobx';
import { Timer } from './components/context/store';

export const defaultData: Timer = {
  houres: 0,
  setHoures: (hr: number) => {},
  minutes: 0,
  setMinutes: (mn: number) => {},
  seconds: 0,
  setSeconds: (sec: number) => {},
  isStarted: false,
  setIsStarted: (isStart: boolean) => {}
}

export const TimerCtx = createContext<Timer>(defaultData)

function App() {

  const [houres, setHoures] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="App">
      <TimerCtx.Provider value={{houres, minutes, seconds, isStarted, setIsStarted, setSeconds, setMinutes, setHoures}}>
        <CountersWithContext />
      </TimerCtx.Provider>
      <CounterWithMobx/>
    </div>
  );
}

export default App;
