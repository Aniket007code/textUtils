import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>

      <Navbar title="Text-Utility" />
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
