import React, { useState } from 'react';

import _ from 'lodash';

const Hourly = ({ hourlyData }) => {

    // hook for sorting
    const [sortDate, setSortDate] = useState({ path: 'datestamp', order: 'asc' });

    // weather conditions
    const weather_condition_dt = hourlyData.map(element => element.dt);
    const weather_condition_dt_sliced = weather_condition_dt.slice(1, 13);

    const weather_condition_id = hourlyData.map(element => element.weather[0].id);
    const weather_condition_id_sliced = weather_condition_id.slice(1, 13);

    const weather_condition_description = hourlyData.map(element => element.weather[0].description);
    const weather_condition_description_sliced = weather_condition_description.slice(1, 13);

    const weather_condition = [];
    for (let id = 200; id <= 831; id++) {
        weather_condition.push(id);
    };

    const id_actuall = weather_condition_id_sliced.filter(element => weather_condition.includes(element));

    // weather conditions for actuall next 12 hours
    const weather_condition_sum = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt: x, id: id_actuall[y], description: weather_condition_description_sliced[y] }
    });

    // CONDITIONS FOR RAIN - WEATHER SITUATIONS 

    // 800 = clear sky
    const thunderstorm_light_rain = 800;
    const probability_thunderstorm_light_rain = weather_condition_sum.filter(element => element.id === thunderstorm_light_rain);
    const firstElement = probability_thunderstorm_light_rain.shift();
    const message_thunderstorm_light_rain = {...firstElement};

    const { dt, description } = message_thunderstorm_light_rain;

    // Unix Timestamp Conversion for 800
    const unixTimestamp = dt;
    const date = new Date(unixTimestamp * 1e3); // 1e3 === 1000
    const localized = date.toLocaleDateString();
    const timed = date.toLocaleTimeString();  

    // 801 = few clouds: 11-25%
    const weather_condition_sum_1 = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt_1: x, id_1: id_actuall[y], description_1: weather_condition_description_sliced[y] }
    });

    const thunderstorm_heavy_rain = 801;
    const probability_thunderstorm_heavy_rain = weather_condition_sum_1.filter(element => element.id_1 === thunderstorm_heavy_rain);
    const secondElement = probability_thunderstorm_heavy_rain.shift();
    const message_thunderstorm_heavy_rain = {...secondElement};
    
    const { dt_1, description_1 } = message_thunderstorm_heavy_rain;

    // Unix Timestamp Conversion for 801
    const unixTimestamp_1 = dt_1;
    const date_1 = new Date(unixTimestamp_1 * 1e3); // 1e3 === 1000
    const localized_1 = date_1.toLocaleDateString();
    const timed_1 = date_1.toLocaleTimeString();   
   
    // functions
    function first_thunderstorm_light_rain() {
        if ( probability_thunderstorm_light_rain.length > 0) {
            return <p>On {localized} at {timed} there are {description} coming.</p>
        }      
    };
    function second_thunderstorm_heavy_rain() {
        if (probability_thunderstorm_heavy_rain.length > 0) {
            return <p>On {localized_1} at {timed_1} there are {description_1} coming.</p>
        } 
    };

    // common functions for specific message showing
    function umbrella_message() {
        if (probability_thunderstorm_light_rain.length > 0 || probability_thunderstorm_heavy_rain.length > 0) {
            return <p><b>Please, don't forget your umbrella.</b></p>
        }
    };

    function no_umbrella_message() {
        if (probability_thunderstorm_light_rain.length === 0 && probability_thunderstorm_heavy_rain.length === 0) {
            return <p><b>We don't expect rain in next 12 hours. Have a nice time outdoors!</b></p>
        }
    };

    // sorting
    const functions_array = [first_thunderstorm_light_rain(), second_thunderstorm_heavy_rain()];
    const date_array = [date, date_1];

    const merging = functions_array.map(function (x, y) { 
        return { function: x, datestamp: date_array[y] }
    });

    function handleSort(path) {
        setSortDate({sortDate: { path, order: 'asc' }});
    }

    const sorted = _.orderBy(merging, [sortDate.path], [sortDate.order]);

    return ( 
        <React.Fragment>
            <ul>{sorted.map(element => <li>{element.function}</li>)}</ul>
            <p className="umbrella-message">{umbrella_message()}</p>
            <p>{no_umbrella_message()}</p>
        </React.Fragment>
    );
}
 
export default Hourly;