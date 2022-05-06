import { createContext, useState } from 'react';
import './App.css';
import { HelloWithContext } from './components/HelloWithContext';
import { Hello } from './components/HelloWithState';
import { HelloEffect } from './components/HelloWithUseEffect';

const defaultValue = {name: '', setFunc: (value: string) => {}}
export const HelloCtx = createContext(defaultValue);

function App() {
  const [name, setName] = useState('Strainger');
  return (
    <div className="App">
      <Hello/>
      <HelloCtx.Provider value={{name: name, setFunc: setName}}>
        <HelloWithContext/>
      </HelloCtx.Provider>
      <HelloEffect/>
    </div>
  );
}

export default App;
