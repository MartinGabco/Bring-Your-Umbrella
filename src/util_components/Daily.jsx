import React from 'react';

// umbrella icon
import umbrella_icon from '../img/FreeVector-Rain-And-Umbrella-Icon.png';

// style
import '../style/Daily.css';

const Daily = props => {
    const { daily_weather_condition_data, umbrella_content, daily_weather_condition_data_sum} = props;

    return ( 
        <ul className="daily-list">
            {daily_weather_condition_data_sum.map(element => 
                (<li className="daily-item">
                    <section className="dating">
                        <h4>{element.daily_weather_condition_data.day}</h4>
                        <p>{element.daily_weather_condition_data.date}</p>
                        <p>{element.daily_weather_condition_data.time}</p>
                    </section>
                    <section className="weather">
                            <p>
                                <i>{element.daily_weather_condition_data.situation}</i>
                            </p>
                            <img src={`http://openweathermap.org/img/w/${element.daily_weather_condition_data.icon}.png`}/>
                            <p>{element.daily_weather_condition_data.temperature}°C</p>
                    </section>
                    <section className="umbrella">
                        {element.umbrella}
                    </section>
                </li>)
            )}
        </ul>
    )
}
 
export default Daily;