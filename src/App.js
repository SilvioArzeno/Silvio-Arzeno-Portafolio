import React from 'react';
import logo from './logo.svg';
import './App.css';
import './SomeList'
import ShowList from './SomeList';

function App() {
  return (
    
    <div className="App">
      <ShowList/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://github.com/SilvioArzeno"
          target="_blank"
          rel="noopener noreferrer"
        >
         Github
        </a>
      </header>
    </div>
  );
}

export default App;
