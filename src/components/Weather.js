import React, { useEffect, useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
// import { CardColumns  } from 'reactstrap';
// import WeatherChild from './WeatherChild'  

const Weather = (props) => {
    const [localWeather, setLocalWeather] = useState()
    let lat = props.latitude;
    let long = props.longitude;
    // let units = 'imperial'
    const apiKey = '0c25e41bda068d84da12b09de7d66a89';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
    //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${units}`


    function fetchWeather(){
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setLocalWeather(json.main.temp);
            console.log(json.main.temp);
        });
    }

    useEffect(()=>{
        fetchWeather();
    }, []);   

    const [toggle, setToggle] = useState(true);
    
    function handleToggle(){
        if (toggle === true){
          setToggle(false)
        } else {
          setToggle(true)
        }}

    return ( 
    <>
    {toggle === true ? Math.floor(localWeather * 1.8 - 459.67) +"°F" : Math.floor(localWeather - 273.12)+"°C" }
      <br></br>
      {toggle === true ? <button onClick ={handleToggle}>Prefer Centigrade?</button>:
      <button onClick ={handleToggle}>Prefer Fahrenheit?</button>}
    </>);
};
 
export default Weather;