import React from "react";
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import MyTesterComponent from './components/MyTesterComponent'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-landing">
          <Dashboard/>
          <Preferences/>
          <MyTesterComponent/>

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
