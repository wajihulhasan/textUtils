import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  //Toggle the color of application
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#04264a';
      showAlert('Dark mode is enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', 'success');
    }
  }

  const grayTheme = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Gray theme is enabled', 'success');
    }
    else {
      document.body.style.backgroundColor = '#343a40';
      showAlert('Gray theme is enabled', 'success');
    }

  }

  const cyanTheme = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#055160';
      showAlert('Cyan theme is enabled', 'success');
    }
    else {
      document.body.style.backgroundColor = '#055160';
      showAlert('Cyan theme is enabled', 'success');
    }

  }

  const indigoTheme = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#290661';
      showAlert('Indigo theme is enabled', 'success');
    }
    else {
      document.body.style.backgroundColor = '#290661';
      showAlert('Indigo theme is enabled', 'success');

    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      console.log("Hello world!0")
      setAlert(null);
    }, 1000)
  }

  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} grayTheme={grayTheme} cyanTheme={cyanTheme} indigoTheme={indigoTheme} />
      <Alert alert={alert} />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
        <div className="container my-3">
        <TextForm textTitle="Enter the Text" mode={mode} showAlert={showAlert} />
      </div>
        </Route>
      </Switch>
      

    </Router>

  );
}

export default App;
