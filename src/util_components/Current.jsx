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
                <ul className="current_informations" style={{ "list-style":"none" }}>
                    <li key={allData.id}><h3>{allData.timezone}</h3></li>
                    <li key={allData.id}><p>{localized}</p></li>
                    <li key={allData.id}><p>Observed at: {timed}</p></li>
                </ul>
            </div>
            <div className="current_right">
                <ul className="current_weather_list" style={{ "list-style":"none" }}>
                    <li key={currentData.id}><h2>{currentData.main}</h2></li>
                    <li key={currentData.id}><p>{currentData.description}</p></li>
                    <li key={currentData.id}><img src={`http://openweathermap.org/img/w/${currentData.icon}.png`}/></li>
                    <li key={allData.id}><p>Temperature: {allData.current.temp} °C</p></li>
                </ul>
            </div>
        </React.Fragment>
    );
}
 
export default Current;