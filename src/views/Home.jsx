import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-link"
          rel="noopener noreferrer"
        >
          Start New One
        </button>
        <button
          className="App-link"
          rel="noopener noreferrer" >
          Chose One Saved
        </button>
      </header>
    </div>
  );
}

export default App;