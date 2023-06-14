import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>

      <Navbar title="Text-Utility" />
      <br />
      <div className="container">
        <TextForm name = "Enter Your Text Here"/>

      </div>


      {/* <h1>Hello This is our react App</h1> */}
    </>

  );
}

export default App;
