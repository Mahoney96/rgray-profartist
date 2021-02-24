import React from "react";
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import MyTesterComponent from './components/MyTesterComponent'
import logo from './logo.svg';
import './components/virtGal/virt-gal.css';
import './App.css';
import MyTesterComponentTwo from "./components/MyTesterComponentTwo";
import ParagraphThree from "./components/ParagraphThree";

function App() {
  return (
    <div className="App">
      <header className="container-num-thirteen-title-includ-header-app">
        <div className="container-num1-title">
          <Dashboard/>
          <br></br>
          <Preferences/>
          <br></br>
          <MyTesterComponent/>
          <MyTesterComponentTwo/>
          

        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click to learn more about the artist. 
        </p>
        <a
          className="App-link"
          href="https://www.usnews.com/best-colleges/university-of-california-san-diego-1317"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click See to Gallery. 
        </a>
      </header>
    </div>
  );
}

export default App;
