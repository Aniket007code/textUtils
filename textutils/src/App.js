import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const [btnText1, setbtnText1] = useState("Enable Dark Mode");


  const handleDarkMode=()=>{
    if(mode === "light"){
      setMode("dark")
      setbtnText1('Enable light Mode')
      document.body.style.backgroundColor = "#FF6F61"
      // " #121212"
    }else{
      setMode("light")
      setbtnText1('Enable Dark Mode')
      document.body.style.backgroundColor = "white"


    }

  }


  return (
    <>

      <Navbar title="Text-Utility" mode={mode} handleDarkMode={handleDarkMode} btnText1 ={btnText1}/>
      <br />
      <div className="container">
        <TextForm name = "Enter Your Text Here"/>

      </div>
      {/* <About/> */}


      {/* <h1>Hello This is our react App</h1> */}
    </>

  );
}

export default App;
