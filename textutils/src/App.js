import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

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

      <Navbar title="Text-Utility" mode={mode} handleDarkMode={handleDarkMode} handleColorMode={handleColorMode} btnText1={btnText1} btnText2={btnText2} />
      <br />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} name="Enter Your Text Here" />

      </div>
      {/* <About/> */}


      {/* <h1>Hello This is our react App</h1> */}
    </>

  );
}

export default App;
