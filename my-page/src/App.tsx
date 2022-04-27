import './App.css';

const aboutMe = {
  firstName: "Yuriy",
  biography: `Age: 42. Lived in Kharkiv, now temporare (i'll hope) in Dnipro. I graduated from the NURE (Kharkiv National University of Radio Electronics). Married`,
  contacts: "email: hameleon0980@gmail.com, phone: +38 098 474-60-94"
}

function App() {
  return (
    <div className="App">
      <div><h2>FIRST NAME: {aboutMe.firstName}</h2></div>
      <div><h3>SHORT BIOGRAPHI:<br/> {aboutMe.biography}</h3></div>
      <div><h3>PUBLIC CONTACTS: {aboutMe.contacts}</h3></div>
    </div>
  );
}

export default App;
