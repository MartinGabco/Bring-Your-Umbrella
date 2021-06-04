import React from 'react';

// components
import WeatherShow from '../util_components/Weather_Show';

// style 
import '../style/WeatherForecast.css';

const WeatherForecast = () => {
    return ( 
        <div className="WeatherForecast">
            <WeatherShow/>
        </div> 
    );
}
 
export default WeatherForecast;