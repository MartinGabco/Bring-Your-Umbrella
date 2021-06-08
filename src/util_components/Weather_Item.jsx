import React from 'react';

const Weather_Item = props => {
    const { place, 
            country, 
            situation, 
            temperature,
            temp_min,
            temp_max,
            feels,
            pressure,
            wind
    } = props;

    return (       
        <React.Fragment>
            <p><b>{place}</b></p>
            <p>{country}</p>
            <p>{situation}</p>            
            <p>Temperature:{temperature}</p>
            <p>Max-temperature:{temp_min}</p>
            <p>Min-temeprature:{temp_max}</p>
            <p>Feels-temperature:{feels}</p>
            <p>Pressure: {pressure}</p>
            <p>Speed of wind: {wind}</p> 
        </React.Fragment>      
    );
}
 
export default Weather_Item;