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
    const [allData, setAllData] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [hourlyData, setHourlyData] = useState([]);
    const [dailyData, setDailyData] = useState([]);

    // loading
    const [isLoading, setIsLoading] = useState(false);

    // error handling
    const [error, setError] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(GeolocationPosition => {
            const latitude = GeolocationPosition.coords.latitude;
            const longitude = GeolocationPosition.coords.longitude;

            setIsLoading(true);
            setError(null);

            try {
                const promise1 = axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly&lang=sk&appid=0797206abd8f52b24a9455dd77220dbc`);
                promise1.then(response => {
                    setAllData(response.data)
                    setCurrentData(response.data.current.weather[0]);
                    setDailyData(response.data.daily);
                });
            } catch (ex) {
                if (ex.response && ex.response.status === 404) {
                    const message = 'Something went wrong';
                    setError(message);
                } else {
                    const message = 'An unexpected error occurrred!';
                    setError(message);
                };
            };

            const promise2 = axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily&lang=sk&appid=0797206abd8f52b24a9455dd77220dbc`);
            promise2.then(response => {
                setHourlyData(response.data.hourly);
            });

            setIsLoading(false);
        });
    }, []);

    // Daily_content

    let daily_content = <div className="loader"></div>;

    if (dailyData.length > 0) {
        daily_content = <Daily dailyData={dailyData}/>
    }

    if (error) {
        daily_content = <p>{error}</p>
    }

    return (
        <div className="content">
            <p>{daily_content}</p>
            <p></p>
        </div>
    );
}

export default WeatherShow;
