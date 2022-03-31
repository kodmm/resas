import React, { useEffect } from 'react';
import { getPref  } from './api/resas';
import type { Prefectures } from './api/resas';
import './App.css';
import { useAppDispatch } from './hooks';
import { setPrefectures } from './features/prefectures/prefecturesSlice';
import { Main } from './components/main';

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
