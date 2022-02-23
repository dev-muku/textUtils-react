import { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  /* const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
  } */

  const toggleMode = () => {
   /*  removeBodyClasses();
    document.body.classList.add('bg-'+cls); */
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(17 35 57)';
      showAlert("Dark mode is enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  }
  
  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={ <About mode={mode} />} />
            
          
          <Route exact path="/" element={<TextForm heading='Enter the Text to Analyze' mode={mode} showAlert={showAlert} />} />
      </Routes>
        {/* <TextForm heading='Enter the Text to Analyze' mode={mode} showAlert={showAlert} /> */}
        {/* <About /> */}
      </div>
      </Router>
    </>
  );
}

export default App;
