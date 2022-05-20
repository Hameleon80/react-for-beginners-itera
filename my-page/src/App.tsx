import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Header } from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/:ln' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
