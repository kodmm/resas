import React, { useEffect } from 'react';
import { getPref, Prefectures } from './api/resas';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { setPrefectures, selectPrefectures } from './features/prefectures/prefecturesSlice';

function App() {
  const dispatch = useAppDispatch()

  const fetchPref = async() => {
    const result: Prefectures[] = await getPref();
    dispatch(setPrefectures(result))
  }

  useEffect(() => {
    fetchPref()
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
