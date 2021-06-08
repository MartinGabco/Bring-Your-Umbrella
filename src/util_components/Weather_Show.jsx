import React, { useState, useEffect } from 'react';

// axios
import axios from 'axios';

// components
import Weather_Item from './Weather_Item';

const WeatherShow = () => {
    const [latitude, setLatitude] = useState([])
    const [longitude, setLongitude] = useState([])

    const [place, setPlace] = useState([])
    const [country, setCountry] = useState([])
    const [situation, setSituation] = useState([])
    const [temperature, setTemperature] = useState([])  
    const [temp_min, setTemp_min] = useState([])
    const [temp_max, setTemp_max] = useState([])
    const [feels, setFeels] = useState([])   
    const [pressure, setPressure] = useState([])
    const [wind, setWind] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(GeolocationPosition => {
            setLatitude(GeolocationPosition.coords.latitude)
            setLongitude(GeolocationPosition.coords.longitude)
        });
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0797206abd8f52b24a9455dd77220dbc`)
        .then(response => {
            setPlace(response.data.name)
            setCountry(response.data.sys.country)

            const situation = response.data.weather.name;
            setSituation(situation)

            setTemperature(response.data.main.temp)
            setTemp_min(response.data.main.temp_min)
            setTemp_max(response.data.main.temp_max)
            setPressure(response.data.main.pressure)
            setFeels(response.data.main.feels_like)
            setWind(response.data.wind.speed)

            console.log(response)
        });
    });

    return (
        <React.Fragment>
            <Weather_Item
                place={place}
                country={country}
                situation={situation}
                temperature={temperature}
                temp_min={temp_min}
                temp_max={temp_max}
                feels={feels}
                pressure={pressure}
                wind={wind}
            />            
        </React.Fragment>
    );
}

export default WeatherShow;
