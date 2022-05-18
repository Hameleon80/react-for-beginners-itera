import { useState } from 'react';
import './App.css';
import { CountersWithContext } from './components/context/CounterWithContext';
import { CounterWithMobx } from './components/mobx/CounterWithMobx';
import { TimerCtx } from './components/context/store';

function App() {

  const [startTime, setStartTime] = useState(Date.now());
  const [currentTime, setCurrentTime] = useState(Date.now());

  return (
    <div className="App">
      <TimerCtx.Provider value={{startTime, setStartTime, currentTime, setCurrentTime}}>
        <CountersWithContext />
      </TimerCtx.Provider>
      <CounterWithMobx/>
    </div>
  );
}

export default App;
