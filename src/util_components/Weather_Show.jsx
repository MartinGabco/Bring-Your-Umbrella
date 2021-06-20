import React, { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";

// axios
import axios from 'axios';

// components
import Authentication from '../components/Authentication';
import Current from './Current';
import Hourly from './Hourly';
import Daily from './Daily';

// styles
import '../style/Weather_Show.css';
import '../style/Current.css';

const WeatherShow = () => {
    const [allData, setAllData] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [hourlyData, setHourlyData] = useState([]);
    const [dailyData, setDailyData] = useState([]);

    // loading
    const [isLoading, setIsLoading] = useState(false);

    // error handling
    const [error, setError] = useState(null);

    // serving variables
    const [weatherLengthNumber, setWeatherLengthNumber] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(GeolocationPosition => {
            const latitude = GeolocationPosition.coords.latitude;
            const longitude = GeolocationPosition.coords.longitude;

            setIsLoading(true);
            setError(null);

            try {
                const promise1 = axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly&appid=0797206abd8f52b24a9455dd77220dbc`);
                promise1.then(response => {
                    setAllData(response.data);
                    setCurrentData(response.data.current.weather[0]);
                    setDailyData(response.data.daily);

                    // length of weather array
                    const weather_length_number = response.data.current.weather.length;
                    setWeatherLengthNumber(weather_length_number);
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

            const promise2 = axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily&appid=0797206abd8f52b24a9455dd77220dbc`);
            promise2.then(response => {
                setHourlyData(response.data.hourly);
            });

            setIsLoading(false);
        });
    }, []);

    // Current_content   
    let current_content = <div className="loader"></div>;

    if (weatherLengthNumber > 0) {
        current_content = <Current currentData={currentData} allData={allData}/>
    }

    // Daily_content
    let daily_content = <div className="loader"></div>;

    if (dailyData.length > 0) {
        daily_content = <Daily dailyData={dailyData} />
    }

    // errors handling
    if (error) {
        daily_content = <p>{error}</p>
        current_content = <p>{error}</p>
    }

    return (
        <div className="container">
            <header className="header_wrapper">
                <h2>Do you need umbrella today or tommorow?</h2>
            </header>
            <div className="current_weather">
                {current_content}
            </div>
            <div className="sidebar">   
                <div className="messages_wrapper">
                    <Hourly hourlyData={hourlyData}/>
                </div> 
                <div className="link_wrapper">
                    <Link to='./authentification'>
                        <a className="authentication_link">I want to get notifications with rain forecast.</a>
                    </Link>
                </div>        
            </div>
            <footer className="footer_wrapper">
                <Daily dailyData={dailyData}/>
            </footer>
        </div>
    );
}

export default WeatherShow;
