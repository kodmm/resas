import React, { useEffect } from 'react';
import { Config } from './config';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    console.log(Config.endpoint + Config.prefectures)
    const results: any = fetch(Config.endpoint + Config.prefectures, {
      headers: {
        "X-API-KEY": Config.key,
      }
    }).then(response => response.json())
    console.log(results)
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
