import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeExecutableSchema } from 'graphql-tools';
import { execute } from 'graphql';

function foo()  {
  makeExecutableSchema();
}

function bar() {
  execute();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Now
        </a>
      </header>
      <button onClick={() => foo()}>Make Schema</button>
      <button onClick={() => bar()}>Execute</button>
    </div>
  );
}

export default App;
