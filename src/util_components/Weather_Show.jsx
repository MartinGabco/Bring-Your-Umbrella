import React, { useState, useEffect, useCallback } from 'react';

// axios
import axios from 'axios';

// components
import Current from './Current';
import Hourly from './Hourly';
import Daily from './Daily';

// styles
import '../style/Weather_Show.css';
import '../style/Current.css';
import '../style/Hourly.css';

// momment for converting time
import moment from 'moment';

// umbrella icon
import umbrella_icon from '../img/FreeVector-Rain-And-Umbrella-Icon.png';

const WeatherShow = () => {
    const [allData, setAllData] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [hourlyData, setHourlyData] = useState([]);
    const [dailyData, setDailyData] = useState([]);

    // loading
    const [isLoading, setIsLoading] = useState(true);

    // error handling
    const [error, setError] = useState(null);

    // serving variables
    const [weatherLengthNumber, setWeatherLengthNumber] = useState([]);

    // visibility variable
    const [isHidden, setIsHidden] = useState(true);

    const [products, setProducts] = useState([
        { id: 1, title: 'Milan'},
    ]);

        useEffect(() => {
            navigator.geolocation.getCurrentPosition(GeolocationPosition => {
    
                const latitude = GeolocationPosition.coords.latitude;
                const longitude = GeolocationPosition.coords.longitude;
    
                setIsLoading(true);
                setError(null);
    
                const promise1 = axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly&appid=0797206abd8f52b24a9455dd77220dbc`);
                    promise1.then(response => {
                        setAllData(response.data);
                        setCurrentData(response.data.current.weather[0]);
                        setDailyData(response.data.daily);

                        // length of weather array
                        const weather_length_number = response.data.current.weather.length;
                        setWeatherLengthNumber(weather_length_number);

                        console.log('success');
                    });
                    promise1.catch(
                        response => setError('Something has failed. Please, reload the page!')
                    );
    
                const promise2 = axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily&appid=0797206abd8f52b24a9455dd77220dbc`);
                    promise2.then(response => {
                        setHourlyData(response.data.hourly);
                    });
                    promise2.catch(
                        response => setError('Something has failed. Please, reload the page!')
                    );                    
    
                setIsLoading(false);
            });
        }, []);

    // Current_content   
    let current_content = <div className="loader_current"></div>;

    if (weatherLengthNumber > 0) {
        current_content = <Current currentData={currentData} allData={allData}/>
    }

    // Hourly content
    let hourly_content = <div className="loader_hourly"></div>;

    if (hourlyData.length > 0) {
        hourly_content = <Hourly hourlyData={hourlyData} products={products} />
    }

    // errors handling
    if (error) {
        daily_content = <p>{error}</p>
        current_content = <p>{error}</p>
        hourly_content = <p>{error}</p>
    }

    // Daily_content

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
    const daily_weather_id = dailyData_sliced.map(element => element.weather[0].id);
    const daily_icon = dailyData_sliced.map(element => element.weather[0].icon);
    const daily_temperature = dailyData_sliced.map(element => element.temp.day);

    // common final object
    const daily_weather_condition_data = day.map(function (x, y) { 
        return { day: x,
                date: date[y], 
                time: time[y], 
                situation: daily_weather_situation[y], 
                id: daily_weather_id[y],
                icon:  daily_icon[y], 
                temperature: daily_temperature[y],
                umbrella_icon: umbrella_icon[y]
        };
    });

    // showing umbrella icon 
    const umbrella_content = <img src={umbrella_icon}/>

    // weather_variables
    const thunderstorm_light_rain = 200;
    const thunderstorm_rain = 201;
    const thunderstorm_heavy_rain = 202;
    const drizzle_rain = 311;
    const heavy_dazzle_rain = 312;
    const shower_drizzle_rain = 313;
    const light_rain = 500;
    const moderate_rain = 501;
    const heavy_rain = 502;
    const extreme_rain = 504;
    const freezing_rain = 511;
    const light_shower_rain = 520;
    const shower_rain = 521;
    const heavy_shower_rain = 522;
    const ragged_shower_rain = 531;
    const rain_snow = 616;

    const weather_variables = [thunderstorm_light_rain, 
                               thunderstorm_rain, 
                               thunderstorm_heavy_rain, 
                               drizzle_rain, 
                               heavy_dazzle_rain,
                               shower_drizzle_rain,
                               light_rain,
                               moderate_rain,
                               heavy_rain,
                               extreme_rain,
                               freezing_rain,
                               light_shower_rain,
                               shower_rain,
                               heavy_shower_rain,
                               ragged_shower_rain,
                               rain_snow
                            ];
    
    function handleFirst() {
        if (daily_weather_condition_data[0].id === thunderstorm_light_rain) {
            return umbrella_content;   
        }
        if (daily_weather_condition_data[0].id === thunderstorm_rain) {
            return umbrella_content;   
        }
        if (daily_weather_condition_data[0].id === thunderstorm_heavy_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[0].id === drizzle_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[0].id === heavy_dazzle_rain) {
            return umbrella_content;
        }      
        if (daily_weather_condition_data[0].id === shower_drizzle_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[0].id === light_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[0].id === moderate_rain) {
            return umbrella_content;
        }                       
        if (daily_weather_condition_data[0].id === heavy_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[0].id === extreme_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[0].id === freezing_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[0].id === light_shower_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[0].id === shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[0].id === heavy_shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[0].id === ragged_shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[0].id === rain_snow) {
            return umbrella_content;
        }  
    }

    function handleSecond() {
        if (daily_weather_condition_data[1].id === thunderstorm_light_rain) {
            return umbrella_content;   
        }
        if (daily_weather_condition_data[1].id === thunderstorm_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[1].id === thunderstorm_heavy_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[1].id === drizzle_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[1].id === heavy_dazzle_rain) {
            return umbrella_content;
        }      
        if (daily_weather_condition_data[1].id === shower_drizzle_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[1].id === light_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[1].id === moderate_rain) {
            return umbrella_content;
        }                       
        if (daily_weather_condition_data[1].id === heavy_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[1].id === extreme_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[1].id === freezing_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[1].id === light_shower_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[1].id === shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[1].id === heavy_shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[1].id === ragged_shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[1].id === rain_snow) {
            return umbrella_content;
        }  
    }

    function handleThird() {
        if (daily_weather_condition_data[2].id === thunderstorm_light_rain) {
            return umbrella_content;   
        }
        if (daily_weather_condition_data[2].id === thunderstorm_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[2].id === thunderstorm_heavy_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[2].id === drizzle_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[2].id === heavy_dazzle_rain) {
            return umbrella_content;
        }      
        if (daily_weather_condition_data[2].id === shower_drizzle_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[2].id === light_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[2].id === moderate_rain) {
            return umbrella_content;
        }                       
        if (daily_weather_condition_data[2].id === heavy_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[2].id === extreme_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[2].id === freezing_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[2].id === light_shower_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[2].id === shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[2].id === heavy_shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[2].id === ragged_shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[2].id === rain_snow) {
            return umbrella_content;
        }  
    }

    function handleFourth() {
        if (daily_weather_condition_data[3].id === thunderstorm_light_rain) {
            return umbrella_content;   
        }
        if (daily_weather_condition_data[3].id === thunderstorm_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[3].id === thunderstorm_heavy_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[3].id === drizzle_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[3].id === heavy_dazzle_rain) {
            return umbrella_content;
        }      
        if (daily_weather_condition_data[3].id === shower_drizzle_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[3].id === light_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[3].id === moderate_rain) {
            return umbrella_content;
        }                       
        if (daily_weather_condition_data[3].id === heavy_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[3].id === extreme_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[3].id === freezing_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[3].id === light_shower_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[3].id === shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[3].id === heavy_shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[3].id === ragged_shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[3].id === rain_snow) {
            return umbrella_content;
        }  
    }

    function handleFifth() {
        if (daily_weather_condition_data[4].id === thunderstorm_light_rain) {
            return umbrella_content;   
        }
        if (daily_weather_condition_data[4].id === thunderstorm_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[4].id === thunderstorm_heavy_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[4].id === drizzle_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[4].id === heavy_dazzle_rain) {
            return umbrella_content;
        }      
        if (daily_weather_condition_data[4].id === shower_drizzle_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[4].id === light_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[4].id === moderate_rain) {
            return umbrella_content;
        }                       
        if (daily_weather_condition_data[4].id === heavy_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[4].id === extreme_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[4].id === freezing_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[4].id === light_shower_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[4].id === shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[4].id === heavy_shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[4].id === ragged_shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[4].id === rain_snow) {
            return umbrella_content;
        }  
    }

    function handleSixth() {
        if (daily_weather_condition_data[5].id === thunderstorm_light_rain) {
            return umbrella_content;   
        }
        if (daily_weather_condition_data[5].id === thunderstorm_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[5].id === thunderstorm_heavy_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[5].id === drizzle_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[5].id === heavy_dazzle_rain) {
            return umbrella_content;
        }      
        if (daily_weather_condition_data[5].id === shower_drizzle_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[5].id === light_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[5].id === moderate_rain) {
            return umbrella_content;
        }                       
        if (daily_weather_condition_data[5].id === heavy_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[5].id === extreme_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[5].id === freezing_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[5].id === light_shower_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[5].id === shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[5].id === heavy_shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[5].id === ragged_shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[5].id === rain_snow) {
            return umbrella_content;
        }  
    }

    function handleSeventh() {
        if (daily_weather_condition_data[6].id === thunderstorm_light_rain) {
            return umbrella_content;   
        }
        if (daily_weather_condition_data[6].id === thunderstorm_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[6].id === thunderstorm_heavy_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[6].id === drizzle_rain) {
            return umbrella_content;
        }
        if (daily_weather_condition_data[6].id === heavy_dazzle_rain) {
            return umbrella_content;
        }      
        if (daily_weather_condition_data[6].id === shower_drizzle_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[6].id === light_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[6].id === moderate_rain) {
            return umbrella_content;
        }                       
        if (daily_weather_condition_data[6].id === heavy_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[6].id === extreme_rain) {
            return umbrella_content;
        }            
        if (daily_weather_condition_data[6].id === freezing_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[6].id === light_shower_rain) {
            return umbrella_content;
        }    
        if (daily_weather_condition_data[6].id === shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[6].id === heavy_shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[6].id === ragged_shower_rain) {
            return umbrella_content;
        }  
        if (daily_weather_condition_data[6].id === rain_snow) {
            return umbrella_content;
        }  
    }          

    const handleSum = [handleFirst(), handleSecond(), handleThird(), handleFourth(), handleFifth(), handleSixth(), handleSeventh()]

    const daily_weather_condition_data_sum = daily_weather_condition_data.map(function (x, y) { 
        return { daily_weather_condition_data: x, umbrella: handleSum[y] }
    });

    // Hourly content
    let daily_content = <div className="loader_daily"></div>;

    if (dailyData.length > 0) {
        daily_content = <Daily daily_weather_condition_data_sum={daily_weather_condition_data_sum} />
    }

    // errors handling
    if (error) {
        daily_content = <p>{error}</p>
    }

    return (
        <div className="container">
            <header className="header_wrapper">
                <h2>Do you need umbrella today or tommorow?</h2>
            </header>
            <div className="current_weather">
                {current_content}
            </div>
            <div className="sidebar">   
                <div className="messages_wrapper">
                    {hourly_content}
                </div>       
            </div>
            <footer className="footer_wrapper">
                {daily_content}
            </footer>
        </div>
    );
}

export default WeatherShow;
