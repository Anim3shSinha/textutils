import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import Alert from './Alert';
import { useState } from 'react';
//import About from './About';
/* import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
 */

function App() {

  const [Mode, setMode] = useState('light');

  const [alert, setAlert] = useState(' ');

   const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
      if (Mode === 'light') {
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
          showAlert("Dark mode has been enable", "success")
      }
      else {
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Light mode has been enable", "success")
      }
    };

  
  return (
   <>
   {/* <Router> */}
      <Navbar title="TextUtils" about="About Us" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform  heading="Enter the text to analyze below" mode={Mode} showAlert={showAlert} />
       {/*  <Routes>  
          <Route exact path="/Textform" element={ <Textform  heading="Enter the text to analyze below" mode={Mode} showAlert={showAlert} /> }/>
          <Route exact path="/About" element={<About/>}/>
        </Routes> */}
      </div> 
   {/*  </Router> */}
  </> 
  );
}

export default App;
