import React, { useState, useEffect, useCallback } from 'react';

// axios
import axios from 'axios';

// components
import Current from './Current';
import Hourly from './Hourly';
import Daily from './Daily';

// styles
import '../style/Weather_Show.css';


const WeatherShow = () => {
    const [allData, setAllData] = useState([])
    const [currentData, setCurrentData] = useState([])
    const [hourlyData, setHourlyData] = useState([])
    const [dailyData, setDailyData] = useState([])

    // loading
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(GeolocationPosition => {
            const latitude = GeolocationPosition.coords.latitude;
            const longitude = GeolocationPosition.coords.longitude;

            setIsLoading(true);

            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly&lang=sk&appid=0797206abd8f52b24a9455dd77220dbc`)
            .then(response => {
                setAllData(response.data)
                setCurrentData(response.data.current);
                setDailyData(response.data.daily);
            });

            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily&lang=sk&appid=0797206abd8f52b24a9455dd77220dbc`)
            .then(response => {
                setHourlyData(response.data.hourly)
            });

            setIsLoading(false);
        });
    }, []);

    console.log(allData)

    return (
        <div className="content">
            {isLoading && <div className="loader"></div>}
            {!isLoading && <div className="loaded_content">
                <Current currentData={currentData}/>
                <Hourly hourlyData={hourlyData}/>  
                <Daily dailyData={dailyData}/>
            </div>}
        </div>
    );
}

export default WeatherShow;
