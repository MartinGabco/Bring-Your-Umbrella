import React, { useState, useEffect, useCallback } from 'react';

// axios
import axios from 'axios';

// components
import Weather_Item from './Weather_Item';

const WeatherShow = () => {
    const [weatherData, setWeatherData] = useState([])
    const [currentData, setCurrentData] = useState([])
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(GeolocationPosition => {
            const latitude = GeolocationPosition.coords.latitude;
            const longitude = GeolocationPosition.coords.longitude;

            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly&appid=0797206abd8f52b24a9455dd77220dbc`)
            .then(response => {
                setWeatherData(response.data)
                setCurrentData(response.data.current);
                setDailyData(response.data.daily);
            });
        });
    }, []);

    console.log(weatherData)

    return (
        <React.Fragment>
            <Weather_Item currentData={currentData}/>     
        </React.Fragment>
    );
}

export default WeatherShow;
