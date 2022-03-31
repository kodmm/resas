import React, { useEffect } from 'react';
import { getPref, Prefectures } from './api/resas';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch } from './hooks';
import { setPrefectures } from './features/prefectures/prefecturesSlice';

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
      <Main />
    </div>
  );
}

export default App;
