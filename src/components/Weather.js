import React, { useEffect, useState } from 'react';
// import { CardColumns  } from 'reactstrap';
// import WeatherChild from './WeatherChild'  

const Weather = (props) => {
    const [localWeather, setLocalWeather] = useState([])
    let lat = props.latitude;
    let long = props.longitude;
    let units = 'imperial'
    const apiKey = '0c25e41bda068d84da12b09de7d66a89';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${units}`
    //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${units}`


    function fetchWeather(){
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setLocalWeather(json.results);
            console.log(json.results);
        });
    }

    useEffect(()=>{
        fetchWeather();
    }, []);   

    return ( 
    <>
    </>);
};
 
export default Weather;