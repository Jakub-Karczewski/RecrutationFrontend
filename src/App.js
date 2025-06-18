import './App.css';
import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WeatherMap from './components/WeatherMap';
import SummaryTable from './components/SummaryTable';
import TabPanel from './components/TabPanel';
import DailyTable from './components/DailyTable';

function App() {
  const [isDaily, setIsDaily] = useState(false);
  const [position, setPosition] = useState(null);
  return<div>
    <WeatherMap onChange={setPosition}/>
    <TabPanel onChange={setIsDaily}/>
    {isDaily ? <DailyTable/> : <SummaryTable/> }
    {JSON.stringify(position)}</div>
}

export default App;
