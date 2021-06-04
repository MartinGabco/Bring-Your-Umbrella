import React, { useState, useEffect } from 'react';

// axios
import axios from 'axios';

const WeatherShow = () => {
    const [latitude, setLatitude] = useState([])
    const [longitude, setLongitude] = useState([])
    const [weatherItem, setWeatherItem] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(GeolocationPosition => {
            setLatitude(GeolocationPosition.coords.latitude)
            setLongitude(GeolocationPosition.coords.longitude)
        });
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0797206abd8f52b24a9455dd77220dbc`)
        .then(responseData => {
            setWeatherItem(responseData.data.name)
        });
        console.log(latitude)
        console.log(longitude)
        console.log(weatherItem)
    });

    return (
        <p>{weatherItem}</p>
    );
}

export default WeatherShow;
