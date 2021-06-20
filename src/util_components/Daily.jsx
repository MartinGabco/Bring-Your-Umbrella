import React from 'react';

import moment from 'moment';

// style
import '../style/Daily.css';

const Daily = props => {
    const { dailyData } = props;

    // next 7 days
    const dailyData_sliced = dailyData.slice(1, 8);

    // converting timestamp
    const daily_weather_condition_dt = dailyData_sliced.map(element => element.dt);

    const first_date = moment.unix(daily_weather_condition_dt[0]).utc();
    const day_1 = moment(first_date._d).format("dddd");
    const date_1 = moment(first_date._d).format("MMMM Do");
    const time_1 =  moment(first_date._d).format("h:mm:ss");

    const second_date = moment.unix(daily_weather_condition_dt[1]).utc();
    const day_2 = moment(second_date._d).format("dddd");
    const date_2 = moment(second_date._d).format("MMMM Do");
    const time_2 =  moment(second_date._d).format("h:mm:ss");

    const third_date = moment.unix(daily_weather_condition_dt[2]).utc();
    const day_3 = moment(third_date._d).format("dddd");
    const date_3 = moment(third_date._d).format("MMMM Do");
    const time_3 =  moment(third_date._d).format("h:mm:ss");
    
    const fourth_date = moment.unix(daily_weather_condition_dt[3]).utc();
    const day_4 = moment(fourth_date._d).format("dddd");
    const date_4 = moment(fourth_date._d).format("MMMM Do");
    const time_4 =  moment(fourth_date._d).format("h:mm:ss");

    const fifth_date = moment.unix(daily_weather_condition_dt[4]).utc();
    const day_5 = moment(fifth_date._d).format("dddd");
    const date_5 = moment(fifth_date._d).format("MMMM Do");
    const time_5 =  moment(fifth_date._d).format("h:mm:ss");

    const sixth_date = moment.unix(daily_weather_condition_dt[5]).utc();
    const day_6 = moment(sixth_date._d).format("dddd");
    const date_6 = moment(sixth_date._d).format("MMMM Do");
    const time_6 =  moment(sixth_date._d).format("h:mm:ss");

    const seventh_date = moment.unix(daily_weather_condition_dt[6]).utc();
    const day_7 = moment(seventh_date._d).format("dddd");
    const date_7 = moment(seventh_date._d).format("MMMM Do");
    const time_7 =  moment(seventh_date._d).format("h:mm:ss");

    // common arrays
    const day = [day_1, day_2, day_3, day_4, day_5, day_6, day_7];
    const date = [date_1, date_2, date_3, date_4, date_5, date_6, date_7];
    const time = [time_1, time_2, time_3, time_4, time_5, time_6, time_7];

    const daily_weather_situation = dailyData_sliced.map(element => element.weather[0].main);
    const daily_icon = dailyData_sliced.map(element => element.weather[0].icon);
    const daily_temperature = dailyData_sliced.map(element => element.temp.day);

    // common final object
    const daily_weather_condition_data = day.map(function (x, y) { 
        return { day: x,
                date: date[y], 
                time: time[y], 
                situation: daily_weather_situation[y], 
                icon:  daily_icon[y], 
                temperature: daily_temperature[y] 
        };
    });

    console.log(daily_weather_condition_data);

    return ( 
        <ul className="daily-list">
            {daily_weather_condition_data.map(element => 
                (<li className="daily-item">
                    <section className="dating">
                        <h4>{element.day}</h4>
                        <p>{element.date}</p>
                        <p>{element.time}</p>
                    </section>
                    <section className="weather">
                            <p>
                                <i>{element.situation}</i>
                            </p>
                            <img src={`http://openweathermap.org/img/w/${element.icon}.png`}/>
                            <p>{element.temperature}°C</p>
                    </section>
                    <section className="umbrella">
                        <p className="icon">ICON</p>
                    </section>
                </li>)
            )}
        </ul> 
    )
}
 
export default Daily;