import './App.css';
import './index.css';
import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WeatherMap from './components/WeatherMap';
import SummaryTable from './components/SummaryTable';
import TabPanel from './components/TabPanel';
import DailyTable from './components/DailyTable';
import {getWeatherDaily, getWeatherSummary} from "./services/eventService";
import MainHeader from "./components/MainHeader"
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import weatherCodeMap from "./components/WeatherCodes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
    const [activeButtons, setActiveButtons] = useState({
        daily: false,
        weekly: false,
    });
  const [position, setPosition] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [weekSummary, setWeekSummary] = useState(null);

    const toggleButton = (name) => {
        setActiveButtons((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

  useEffect(() => {
    if (position) {
        console.log('Position state:', position);
      const fetchWeather = async () => {

        try{
          const data = await getWeatherDaily(position.lat, position.lon);
          setWeatherData(data);
          console.log('Fetched weather daily from App:', data);
        } catch (error){
          console.error('Error fetching weather daily from APP:', error);
        }

        try{
            const summ = await getWeatherSummary(position.lat, position.lon);
            setWeekSummary(summ);
            console.log('Fetched weather summary from App:', summ);
        } catch (error){
            console.error('Error fetching weather summary from APP:', error);
        }

      };
      fetchWeather();
    }
  }, [position]);

  function WeatherIcon({ code }) {
      const weather = weatherCodeMap[code] || {
          icon: faQuestionCircle,
          label: 'Unknown weather',
      };
      return <FontAwesomeIcon icon={weather.icon} title={weather.label} className = "text-2xl" />;
  }


  const dailyColumns = [
            { header: 'date', accessor: 'date' },
            {
              header: 'weatherIcon',
              accessor: 'code',
              align: 'right',
              render: (code) => (
                  <WeatherIcon code={code} />
              ),
            },
            { header: 'tempMin', accessor: 'tempMin'},
            { header: 'tempMax', accessor: 'tempMax'},
            { header: 'energy', accessor: 'energy'}
  ]



  return <div>
      <MainHeader title="Aplikacja pogodowa" className="mb-8"/>
      <WeatherMap onChange={setPosition} position={position}/>
      <TabPanel onToggle={toggleButton} activeButtons={activeButtons}/>
      <div className="flex">
          <div className="flex-1">
              {activeButtons.daily ? (
                      weatherData ? (
                          <DailyTable
                              data={weatherData}
                              columns={dailyColumns}
                              rowColor={() => '#fffbe6'}
                          />
                      ) : (
                          <div>Loading...</div>
                      )
                  ) :
                  <></>
              }
          </div>
          <div className="flex-1">
              {activeButtons.weekly ?
                  (weekSummary?
                          (<SummaryTable data={weekSummary}/>)
                          : (
                              <div>Loading...</div>)
                  ) :
                  <></>
              }
          </div>
      </div>
      <div style={{height: '100px'}}></div>
  </div>

}

export default App;
