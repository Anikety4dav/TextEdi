import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light')
  
  const [alert, setAlert] = useState(null)

  const showAlert = (message , type)=> {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=> {
    if (Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color ='white';
      showAlert('Dark mode has been enabled' , 'success')
      document.title = 'TextUtil - Dark'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color ='black';
      showAlert('Dark mode has been disabled' , 'success')
      document.title = 'TextUtil - Light'
    }
    setInterval(() => {
      document.title = ' Install TextUtil ';
    }, 1500);
    setInterval(() => {
      document.title = ' TextUtil is Amazing ';
    }, 2000);
  }

  return ( 
    <Router>
      <Navbar title='TextEdi by Aniket' aboutText='About' Mode={Mode}  toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>

      {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm heading='Enter the text for editing:' showAlert={showAlert}/>}/>
      </Routes> */}

     
      <Switch>
        <Route exact path="/about"> 
          <About/>
        </Route>
        <Route exact path="/">
          <TextForm heading='Enter the text for editing:' showAlert={showAlert}/>
        </Route>  
      </Switch>
      </div>
    </Router>
  );
}

export default App;
