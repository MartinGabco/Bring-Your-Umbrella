import React from 'react';

import moment from 'moment';

const Daily = props => {
    const { dailyData } = props;

    // next 7 days
    const dailyData_sliced = dailyData.slice(1, 8);

    // converting timestamp
    const daily_weather_condition_dt = dailyData_sliced.map(element => element.dt);

    const first_date = moment.unix(daily_weather_condition_dt[0]).utc();
    const day_1 = moment(first_date._d).format("dddd");
    const date_1 = moment(first_date._d).format("MMMM Do YYYY");
    const time_1 =  moment(first_date._d).format("h:mm:ss a");

    const second_date = moment.unix(daily_weather_condition_dt[1]).utc();
    const day_2 = moment(second_date._d).format("dddd");
    const date_2 = moment(second_date._d).format("MMMM Do YYYY");
    const time_2 =  moment(second_date._d).format("h:mm:ss a");

    const third_date = moment.unix(daily_weather_condition_dt[2]).utc();
    const day_3 = moment(third_date._d).format("dddd");
    const date_3 = moment(third_date._d).format("MMMM Do YYYY");
    const time_3 =  moment(third_date._d).format("h:mm:ss a");
    
    const fourth_date = moment.unix(daily_weather_condition_dt[3]).utc();
    const day_4 = moment(fourth_date._d).format("dddd");
    const date_4 = moment(fourth_date._d).format("MMMM Do YYYY");
    const time_4 =  moment(fourth_date._d).format("h:mm:ss a");

    const fifth_date = moment.unix(daily_weather_condition_dt[4]).utc();
    const day_5 = moment(fifth_date._d).format("dddd");
    const date_5 = moment(fifth_date._d).format("MMMM Do YYYY");
    const time_5 =  moment(fifth_date._d).format("h:mm:ss a");

    const sixth_date = moment.unix(daily_weather_condition_dt[5]).utc();
    const day_6 = moment(sixth_date._d).format("dddd");
    const date_6 = moment(sixth_date._d).format("MMMM Do YYYY");
    const time_6 =  moment(sixth_date._d).format("h:mm:ss a");

    const seventh_date = moment.unix(daily_weather_condition_dt[6]).utc();
    const day_7 = moment(seventh_date._d).format("dddd");
    const date_7 = moment(seventh_date._d).format("MMMM Do YYYY");
    const time_7 =  moment(seventh_date._d).format("h:mm:ss a");

    // common arrays
    const day = [day_1, day_2, day_3, day_4, day_5, day_6, day_7];
    const date = [date_1, date_2, date_3, date_4, date_5, date_6, date_7];
    const time = [time_1, time_2, time_3, time_4, time_5, time_6, time_7];

    // common final object
    const daily_weather_condition_data = day.map(function (x, y) { 
        return { day: x, date: date[y], time: time[y] }
    });

    const days_test = daily_weather_condition_data.map(element => element.day);
    const date_test = daily_weather_condition_data.map(element => element.date);
    const time_test = daily_weather_condition_data.map(element => element.time);

    const daily_weather_situation = dailyData_sliced.map(element => element.weather[0].main);
    const daily_icon = dailyData_sliced.map(element => element.weather[0].icon);
    const daily_temperature = dailyData_sliced.map(element => element.temp.day);

    return ( <p>Daily</p> );
}
 
export default Daily;