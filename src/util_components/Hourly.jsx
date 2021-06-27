import React, { useState } from 'react';

import _ from 'lodash';

// css
import '../style/Hourly.css';

import { useDispatch } from 'react-redux';
import { messageActions } from '../store/message-slice';

const Hourly = ({ hourlyData }) => {
    // hook for sorting
    const [sortDate, setSortDate] = useState({ path: 'datestamp', order: 'asc' });
    const [mess, setMess] = useState([])

    // weather conditions
    const weather_condition_dt = hourlyData.map(element => element.dt);
    const weather_condition_dt_sliced = weather_condition_dt.slice(1, 13);

    const weather_condition_id = hourlyData.map(element => element.weather[0].id);
    const weather_condition_id_sliced = weather_condition_id.slice(1, 13);

    const weather_condition_description = hourlyData.map(element => element.weather[0].description);
    const weather_condition_description_sliced = weather_condition_description.slice(1, 13);

    console.log(weather_condition_description);
   
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

    // 200 = thunderstorm with light rain
    const thunderstorm_light_rain = 200;
    const probability_thunderstorm_light_rain = weather_condition_sum.filter(element => element.id === thunderstorm_light_rain);
    const firstElement = probability_thunderstorm_light_rain.shift();
    const message_thunderstorm_light_rain = {...firstElement};

    const { dt, description } = message_thunderstorm_light_rain;

    // Unix Timestamp Conversion for 200
    const unixTimestamp = dt;
    const date = new Date(unixTimestamp * 1e3); // 1e3 === 1000
    const localized = date.toLocaleDateString();
    const timed = date.toLocaleTimeString();  

    
    // 201 = thunderstorm with rain
    const weather_condition_sum_1 = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt_1: x, id_1: id_actuall[y], description_1: weather_condition_description_sliced[y] }
    });

    const thunderstorm_rain = 201;
    const probability_thunderstorm_rain = weather_condition_sum_1.filter(element => element.id_1 === thunderstorm_rain);
    const secondElement = probability_thunderstorm_rain.shift();
    const message_thunderstorm_rain = {...secondElement};
    
    const { dt_1, description_1 } = message_thunderstorm_rain;

    // Unix Timestamp Conversion for 201
    const unixTimestamp_1 = dt_1;
    const date_1 = new Date(unixTimestamp_1 * 1e3); // 1e3 === 1000
    const localized_1 = date_1.toLocaleDateString();
    const timed_1 = date_1.toLocaleTimeString(); 
    
    
    // 202 = thunderstorm with heavy rain
    const weather_condition_sum_2 = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt_2: x, id_2: id_actuall[y], description_2: weather_condition_description_sliced[y] }
    });

    const thunderstorm_heavy_rain = 202;
    const probability_thunderstorm_heavy_rain = weather_condition_sum_1.filter(element => element.id_2 === thunderstorm_heavy_rain);
    const firstElement2 = probability_thunderstorm_heavy_rain.shift();
    const message_thunderstorm_heavy_rain = {...firstElement2};
    
    const { dt_2, description_2 } = message_thunderstorm_heavy_rain;

    // Unix Timestamp Conversion for 202
    const unixTimestamp_2 = dt_2;
    const date_2 = new Date(unixTimestamp_2 * 1e3); // 1e3 === 1000
    const localized_2 = date_2.toLocaleDateString();
    const timed_2 = date_2.toLocaleTimeString();  

    
    // 312 = heavy intensity drizzle rain
    const weather_condition_sum_3 = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt_3: x, id_3: id_actuall[y], description_3: weather_condition_description_sliced[y] }
    });

    const thunderstorm_heavy_intensity_drizzle_rain = 312;
    const probability_thunderstorm_heavy_intensity_drizzle_rain = weather_condition_sum_3.filter(element => element.id_3 === thunderstorm_heavy_intensity_drizzle_rain);
    const firstElement3 = probability_thunderstorm_heavy_intensity_drizzle_rain.shift();
    const message_thunderstorm_heavy_intensity_drizzle_rain = {...firstElement3};

    const { dt_3, description_3 } = message_thunderstorm_heavy_intensity_drizzle_rain;

    // Unix Timestamp Conversion for 312
    const unixTimestamp_3 = dt_3;
    const date_3 = new Date(unixTimestamp_3 * 1e3); // 1e3 === 1000
    const localized_3 = date_3.toLocaleDateString();
    const timed_3 = date_3.toLocaleTimeString();  

    
    // 311 = drizzle rain
    const weather_condition_sum_4 = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt_4: x, id_4: id_actuall[y], description_4: weather_condition_description_sliced[y] }
    });

    const drizzle_rain = 311;
    const probability_drizzle_rain = weather_condition_sum_4.filter(element => element.id_4 === drizzle_rain);
    const firstElement4 = probability_drizzle_rain.shift();
    const message_drizzle_rain = {...firstElement4};

    const { dt_4, description_4 } = message_drizzle_rain;

    // Unix Timestamp Conversion for 311
    const unixTimestamp_4 = dt_4;
    const date_4 = new Date(unixTimestamp_4 * 1e3); // 1e3 === 1000
    const localized_4 = date_4.toLocaleDateString();
    const timed_4 = date_4.toLocaleTimeString();  


    // 313 = shower rain and drizzle
    const weather_condition_sum_5 = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt_5: x, id_5: id_actuall[y], description_5: weather_condition_description_sliced[y] }
    });

    const shower_drizzle_rain = 313;
    const probability_shower_drizzle_rain = weather_condition_sum_5.filter(element => element.id_5 === shower_drizzle_rain);
    const firstElement5 = probability_shower_drizzle_rain.shift();
    const message_shower_drizzle_rain = {...firstElement5};

    const { dt_5, description_5 } = message_shower_drizzle_rain;

    // Unix Timestamp Conversion for 313
    const unixTimestamp_5 = dt_5;
    const date_5 = new Date(unixTimestamp_5 * 1e3); // 1e3 === 1000
    const localized_5 = date_5.toLocaleDateString();
    const timed_5 = date_5.toLocaleTimeString();  
   

    // 500 = light rain
    const weather_condition_sum_6 = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt_6: x, id_6: id_actuall[y], description_6: weather_condition_description_sliced[y] }
    });

    const light_rain = 500;
    const probability_light_rain = weather_condition_sum_6.filter(element => element.id_6 === light_rain);
    const firstElement6 = probability_light_rain.shift();
    const message_light_rain = {...firstElement6};

    const { dt_6, description_6 } = message_light_rain;

    // Unix Timestamp Conversion for 500
    const unixTimestamp_6 = dt_6;
    const date_6 = new Date(unixTimestamp_6 * 1e3); // 1e3 === 1000
    const localized_6 = date_6.toLocaleDateString();
    const timed_6 = date_6.toLocaleTimeString();  


    // 501 = moderate rain
    const weather_condition_sum_7 = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt_7: x, id_7: id_actuall[y], description_7: weather_condition_description_sliced[y] }
    });

    const moderate_rain = 501;
    const probability_moderate_rain = weather_condition_sum_7.filter(element => element.id_7 === moderate_rain);
    const firstElement7 = probability_moderate_rain.shift();
    const message_moderate_rain = {...firstElement7};

    const { dt_7, description_7 } = message_moderate_rain;

    // Unix Timestamp Conversion for 500
    const unixTimestamp_7 = dt_7;
    const date_7 = new Date(unixTimestamp_7 * 1e3); // 1e3 === 1000
    const localized_7 = date_7.toLocaleDateString();
    const timed_7 = date_7.toLocaleTimeString();  


    // 502 = heavy intensity rain
    const weather_condition_sum_8 = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt_8: x, id_8: id_actuall[y], description_8: weather_condition_description_sliced[y] }
    });

    const heavy_rain = 502;
    const probability_heavy_rain = weather_condition_sum_8.filter(element => element.id_8 === heavy_rain);
    const firstElement8 = probability_heavy_rain.shift();
    const message_heavy_rain = {...firstElement8};

    const { dt_8, description_8 } = message_heavy_rain;

    // Unix Timestamp Conversion for 502
    const unixTimestamp_8 = dt_8;
    const date_8 = new Date(unixTimestamp_8 * 1e3); // 1e3 === 1000
    const localized_8 = date_8.toLocaleDateString();
    const timed_8 = date_8.toLocaleTimeString();  


    // 504 = extreme rain
    const weather_condition_sum_9 = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt_9: x, id_9: id_actuall[y], description_9: weather_condition_description_sliced[y] }
    });

    const extreme_rain = 504;
    const probability_extreme_rain = weather_condition_sum_9.filter(element => element.id_9 === extreme_rain);
    const firstElement9 = probability_extreme_rain.shift();
    const message_extreme_rain = {...firstElement9};

    const { dt_9, description_9 } = message_extreme_rain;

    // Unix Timestamp Conversion for 504
    const unixTimestamp_9 = dt_9;
    const date_9 = new Date(unixTimestamp_9 * 1e3); // 1e3 === 1000
    const localized_9 = date_9.toLocaleDateString();
    const timed_9 = date_9.toLocaleTimeString();  


    // 511 = freezing rain
    const weather_condition_sum_10 = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt_10: x, id_10: id_actuall[y], description_10: weather_condition_description_sliced[y] }
    });

    const freezing_rain = 511;
    const probability_freezing_rain = weather_condition_sum_10.filter(element => element.id_10 === freezing_rain);
    const firstElement10 = probability_freezing_rain.shift();
    const message_freezing_rain = {...firstElement10};

    const { dt_10, description_10 } = message_freezing_rain;

    // Unix Timestamp Conversion for 511
    const unixTimestamp_10 = dt_10;
    const date_10 = new Date(unixTimestamp_10 * 1e3); // 1e3 === 1000
    const localized_10 = date_10.toLocaleDateString();
    const timed_10 = date_10.toLocaleTimeString();  


    // 520 = light intensity shower rain
    const weather_condition_sum_11 = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt_11: x, id_11: id_actuall[y], description_11: weather_condition_description_sliced[y] }
    });

    const light_shower_rain = 520;
    const probability_light_shower_rain = weather_condition_sum_11.filter(element => element.id_11 === light_shower_rain);
    const firstElement11 = probability_light_shower_rain.shift();
    const message_light_shower_rain = {...firstElement11};

    const { dt_11, description_11 } = message_light_shower_rain;

    // Unix Timestamp Conversion for 520
    const unixTimestamp_11 = dt_11;
    const date_11 = new Date(unixTimestamp_11 * 1e3); // 1e3 === 1000
    const localized_11 = date_11.toLocaleDateString();
    const timed_11 = date_11.toLocaleTimeString();  


    // 521 = shower rain
    const weather_condition_sum_12 = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt_12: x, id_12: id_actuall[y], description_12: weather_condition_description_sliced[y] }
    });

    const shower_rain = 521;
    const probability_shower_rain = weather_condition_sum_12.filter(element => element.id_12 === shower_rain);
    const firstElement12 = probability_shower_rain.shift();
    const message_shower_rain = {...firstElement12};

    const { dt_12, description_12 } = message_shower_rain;

    // Unix Timestamp Conversion for 521
    const unixTimestamp_12 = dt_12;
    const date_12 = new Date(unixTimestamp_12 * 1e3); // 1e3 === 1000
    const localized_12 = date_12.toLocaleDateString();
    const timed_12 = date_12.toLocaleTimeString();     
    
    
    // 522 = heavy intensity shower rain
    const weather_condition_sum_13 = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt_13: x, id_13: id_actuall[y], description_13: weather_condition_description_sliced[y] }
    });

    const heavy_intensity_shower_rain = 522;
    const probability_heavy_intensity_shower_rain = weather_condition_sum_13.filter(element => element.id_13 === heavy_intensity_shower_rain);
    const firstElement13 = probability_heavy_intensity_shower_rain.shift();
    const message_heavy_intensity_shower_rain = {...firstElement13};

    const { dt_13, description_13 } = message_heavy_intensity_shower_rain;

    // Unix Timestamp Conversion for 522
    const unixTimestamp_13 = dt_13;
    const date_13 = new Date(unixTimestamp_13 * 1e3); // 1e3 === 1000
    const localized_13 = date_13.toLocaleDateString();
    const timed_13 = date_13.toLocaleTimeString();    
    
    
    // 531 = ragged shower rain
    const weather_condition_sum_14 = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt_14: x, id_14: id_actuall[y], description_14: weather_condition_description_sliced[y] }
    });

    const ragged_shower_rain = 531;
    const probability_ragged_shower_rain = weather_condition_sum_14.filter(element => element.id_14 === ragged_shower_rain);
    const firstElement14 = probability_ragged_shower_rain.shift();
    const message_ragged_shower_rain = {...firstElement14};

    const { dt_14, description_14 } = message_ragged_shower_rain;

    // Unix Timestamp Conversion for 531
    const unixTimestamp_14 = dt_14;
    const date_14 = new Date(unixTimestamp_14 * 1e3); // 1e3 === 1000
    const localized_14 = date_14.toLocaleDateString();
    const timed_14 = date_14.toLocaleTimeString(); 
    
    
    // 616 = rain&snow
    const weather_condition_sum_15 = weather_condition_dt_sliced.map(function (x, y) { 
        return { dt_15: x, id_15: id_actuall[y], description_15: weather_condition_description_sliced[y] }
    });

    const rain_snow = 616;
    const probability_rain_snow = weather_condition_sum_15.filter(element => element.id_15 === rain_snow);
    const firstElement15 = probability_rain_snow.shift();
    const message_rain_snow = {...firstElement15};

    const { dt_15, description_15 } = message_rain_snow;

    // Unix Timestamp Conversion for 616
    const unixTimestamp_15 = dt_15;
    const date_15 = new Date(unixTimestamp_15 * 1e3); // 1e3 === 1000
    const localized_15 = date_15.toLocaleDateString();
    const timed_15 = date_15.toLocaleTimeString();    

    // functions
    function first_thunderstorm_light_rain() {
        if ( probability_thunderstorm_light_rain.length > 0) {
            return <p>On {localized} at {timed} there is {description} starting.</p>
        }      
    };
    function second_thunderstorm_rain() {
        if (probability_thunderstorm_rain.length > 0) {
            return <p>On {localized_1} at {timed_1} there is {description_1} starting.</p>
        } 
    };
    function third_thunderstorm_heavy_rain() {
        if (probability_thunderstorm_heavy_rain.length > 0) {
            return <p>On {localized_2} at {timed_2} there is {description_2} starting.</p>
        } 
    };
    function fourth_thunderstorm_heavy_intensity_drizzle_rain() {
        if (probability_thunderstorm_heavy_intensity_drizzle_rain.length > 0) {
            return <p>On {localized_3} at {timed_3} there is {description_3} starting.</p>
        } 
    };
    function fifth_drizzle_rain() {
        if (probability_drizzle_rain.length > 0) {
            return <p>On {localized_4} at {timed_4} there is {description_4} starting.</p>
        } 
    };
    function sixth_shower_drizzle_rain() {
        if (probability_shower_drizzle_rain.length > 0) {
            return <p>On {localized_5} at {timed_5} there is {description_5} starting.</p>
        } 
    };
    function seventh_light_rain() {
        if (probability_light_rain.length > 0) {
            return <p>On {localized_6} at {timed_6} there is {description_6} starting.</p>
        } 
    };
    function eighth_moderate_rain() {
        if (probability_moderate_rain.length > 0) {
            return <p>On {localized_7} at {timed_7} there is {description_7} starting.</p>
        } 
    };
    function ninth_heavy_rain() {
        if (probability_heavy_rain.length > 0) {
            return <p>On {localized_8} at {timed_8} there is {description_8} starting.</p>
        } 
    }; 
    function tenth_heavy_rain() {
        if (probability_extreme_rain.length > 0) {
            return <p>On {localized_9} at {timed_9} there is {description_9} starting.</p>
        } 
    };   
    function eleventh_freezing_rain() {
        if (probability_extreme_rain.length > 0) {
            return <p>On {localized_10} at {timed_10} there is {description_10} starting.</p>
        } 
    };   
    function twelfth_freezing_rain() {
        if (probability_light_shower_rain.length > 0) {
            return <p>On {localized_11} at {timed_11} there is {description_11} starting.</p>
        } 
    };   
    function thirteenth_shower_rain() {
        if (probability_shower_rain.length > 0) {
            return <p>On {localized_12} at {timed_12} there is {description_12} starting.</p>
        } 
    };   
    function fourteenth_heavy_intensity_shower_rain() {
        if (probability_heavy_intensity_shower_rain.length > 0) {
            return <p>On {localized_13} at {timed_13} there is {description_13} starting.</p>
        } 
    }; 
    function fifteenth_ragged_shower_rain() {
        if (probability_ragged_shower_rain.length > 0) {
            return <p>On {localized_14} at {timed_14} there is {description_14} starting.</p>
        } 
    }; 
    function sixteenth_rain_snow() {
        if (probability_rain_snow.length > 0) {
            return <p>On {localized_15} at {timed_15} there is {description_15} starting.</p>
        } 
    };     

    // common functions for specific message showing
    function umbrella_message() {
        if (probability_thunderstorm_light_rain.length > 0 
            || probability_thunderstorm_rain.length > 0
            || probability_drizzle_rain.length > 0
            || probability_shower_drizzle_rain.length > 0
            || probability_light_rain.length > 0
            || probability_moderate_rain.length > 0
            || probability_freezing_rain.length > 0
            || probability_light_shower_rain.length > 0
            || probability_shower_rain.length > 0
            || probability_ragged_shower_rain.length > 0
            || probability_rain_snow.length > 0) {
                return <p><b>Please, don't forget your umbrella!</b></p>
        } 
        if (probability_thunderstorm_heavy_rain.length > 0
            || probability_thunderstorm_heavy_intensity_drizzle_rain.length > 0
            || probability_heavy_rain.length > 0
            || probability_extreme_rain.length > 0
            || probability_heavy_intensity_shower_rain.length > 0) {
                return <p><b>Please, take your raincoat!</b></p>
        }
        else {
            return <p><b>We don't expect rain in next 12 hours. Have a nice time outdoors!</b></p>
        }
    };

    // sorting
    const functions_array = [first_thunderstorm_light_rain(), 
                            second_thunderstorm_rain(), 
                            third_thunderstorm_heavy_rain(), 
                            fourth_thunderstorm_heavy_intensity_drizzle_rain(),
                            fifth_drizzle_rain(),
                            sixth_shower_drizzle_rain(),
                            seventh_light_rain(),
                            eighth_moderate_rain(),
                            ninth_heavy_rain(),
                            tenth_heavy_rain(),
                            eleventh_freezing_rain(),
                            twelfth_freezing_rain(),
                            thirteenth_shower_rain(),
                            fourteenth_heavy_intensity_shower_rain(),
                            fifteenth_ragged_shower_rain(),
                            sixteenth_rain_snow()];
    const date_array = [date, 
                        date_1, 
                        date_2, 
                        date_3,
                        date_4,
                        date_5,
                        date_6,
                        date_7,
                        date_8,
                        date_9,
                        date_10,
                        date_11,
                        date_12,
                        date_13,
                        date_14,
                        date_15];

    const merging = functions_array.map(function (x, y) { 
        return { function: x, datestamp: date_array[y] }
    });

    function handleSort(path) {
        setSortDate({sortDate: { path, order: 'asc' }});
    }

    const sorted = _.orderBy(merging, [sortDate.path], [sortDate.order]);
    const result = sorted.map(element => element.function);

    const newMessage = 10;

    const dispatch = useDispatch();
    const messageBring = () => {
        dispatch(
            messageActions.takeMessage({newMessage})
        );
    } 

    return (
        <div className="messages">
            <p>{result}</p>
            <p className="umbrella-message">{umbrella_message()}</p>
        </div>                   
    );
}
 
export default Hourly;
