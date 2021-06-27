import React from 'react';

// styles
import '../style/Current.css';

const Current = ({ allData, currentData }) => {

    const unixTimestamp = allData.current.dt;
    const date = new Date(unixTimestamp * 1e3); // 1e3 === 1000
    const localized = date.toLocaleDateString();
    const timed = date.toLocaleTimeString();   

    return (
        <React.Fragment>
            <div className="current_left">
                <section className="city_name">
                    <p className="place-location">{allData.timezone}</p>
                    <p>{localized}</p>                    
                </section>
                <section className="observed">
                    <p><b> Observed at: {timed}</b></p>
                </section>
                <section className="temperature_situation">
                    <p className="temperature">Temperature: {allData.current.temp} °C</p>
                </section>
            </div>
            <div className="current_right">
                <section className="main">
                    <h2>{currentData.main}</h2>
                    <p>{currentData.description}</p>                 
                </section>
                <section className="image">
                    <div className="image-wrapper">
                        <img src={`http://openweathermap.org/img/w/${currentData.icon}.png`} className="weather_image"/>   
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}
 
export default Current;