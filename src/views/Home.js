import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/edit">
          <button className="App-link">
              Start New One
          </button>
        </Link>
        <Link to="/edit">
          <button className="App-link">
              Chose One Saved
          </button>
        </Link>
      </header>
    </div>
  );
}

export default App;