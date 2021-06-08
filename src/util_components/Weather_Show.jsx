import React, { useState, useEffect, useCallback } from 'react';

// axios
import axios from 'axios';

// components
import Weather_Item from './Weather_Item';

const WeatherShow = () => {
    const [allData, setAllData] = useState([])
    const [currentData, setCurrentData] = useState([])
    const [hourlyData, setHourlyData] = useState([])
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(GeolocationPosition => {
            const latitude = GeolocationPosition.coords.latitude;
            const longitude = GeolocationPosition.coords.longitude;

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
        });
    }, []);

    console.log(allData)

    return (
        <React.Fragment>
            <Weather_Item currentData={currentData}/>     
        </React.Fragment>
    );
}

export default WeatherShow;
