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

  const [alert , setAlert] = useState("Hello Everyone");

  const showAlert = (messege,type)=>{
    setAlert({
      msg : messege,
      type : type

    })
  }


  const handleDarkMode=()=>{
    if(mode === "light"){
      setMode("dark")
      setbtnText1('Enable light Mode')
      document.body.style.backgroundColor = "#484848"
      showAlert("Dark mode has been enabled","success")
      // " #121212"
    }else{
      setMode("light")
      setbtnText1('Enable Dark Mode')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled","success")



    }

  }


  return (
    <>

      <Navbar title="Text-Utility" mode={mode} handleDarkMode={handleDarkMode} btnText1 ={btnText1}/>
      <br />
      <Alert alert={alert}/>
      <div className="container">
        <TextForm name = "Enter Your Text Here"/>

      </div>
      {/* <About/> */}


      {/* <h1>Hello This is our react App</h1> */}
    </>

  );
}

export default App;
