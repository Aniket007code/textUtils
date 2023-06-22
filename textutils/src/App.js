import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btnText1, setbtnText1] = useState("Enable Dark Mode");
  const [btnText2, setbtnText2] = useState("Enable Color Mode");


  const [alert, setAlert] = useState("");

  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type

    })
    setTimeout(() => {
      setAlert("")

    }, 2000);
  }

  const handleColorMode = () => {
    if (mode === "light" || mode === "dark") {
      // setbtnText2("Color mode enabled");
      document.body.style.backgroundColor = "pink"
      document.body.style.color = "white"
    }



  }


  const handleDarkMode = () => {
    if (mode === "light") {
      setMode("dark")
      setbtnText1('Enable light Mode')
      document.body.style.backgroundColor = "#121212"
      // document.getElementById('changeColour').style.color = 'red'
      document.body.style.color = "white"



      showAlert("Dark mode has been enabled", "success")
      // " #121212"
    } else {
      setMode("light")
      setbtnText1('Enable Dark Mode')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
      document.body.style.color = "Black"




    }

  }


  return (
    <>

      <Router>
        <Navbar title="Text-Utility" mode={mode} handleDarkMode={handleDarkMode} handleColorMode={handleColorMode} btnText1={btnText1} btnText2={btnText2} />
        <br />
        <Alert alert={alert} />

        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>

        <div className="container">
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} name="Enter Your Text Here" />} />
          </Routes>

        </div>



        {/* <Route path="/" element={<TextForm />} />
          <div className="container">
            <TextForm showAlert={showAlert} name="Enter Your Text Here" />

          </div>

        </Routes> */}
      </Router>





      {/* <h1>Hello This is our react App</h1> */}
    </>

  );
}

export default App;
