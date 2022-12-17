import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ExpenseItem from './components/ExpsenseItem';

function App() {
  return (
    <div className="App">
      <Header/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Feur p<code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ExpenseItem/>
      </header>
        <Footer/>
    </div>
  );
}

export default App;
