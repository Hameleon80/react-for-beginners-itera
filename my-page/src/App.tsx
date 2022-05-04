import './App.css';
import { Bio } from './components/Bio';
import { Contacts } from './components/Contacts';
import Footer from './components/Footer';
import { Header } from './components/Header';
import { Name } from './components/Name';
import { aboutMe } from './store/data';


function App() {
  return (
    <div className="App">
      <Header/>
      <Name name={aboutMe.name}/>
      <Bio biography={aboutMe.biography}/>
      <Contacts email={aboutMe.email} phone={aboutMe.phone}/>
      <Footer/>
    </div>
  );
}

export default App;
