import React, { useEffect, useState } from 'react';
import {
    CardColumns
  } from 'reactstrap';

  import RestaurantChild from './RestaurantChild'

  
  
const Restaurant = () => {
    const [restaurant, setRestaurant] = useState([])

    function fetchRestaurant() {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    const url = 'https://developers.zomato.com/api/v2.1/search?count=6&lat=' + lat + '&lon=' + long

    fetch(url, {
        headers: {"user-key": "ae62c29dc6ca220342b1493a1cb740e7", "content-type": "application/json"}})
    .then(res => res.json())
    .then(json => {
        setRestaurant(json.restaurants)
        console.log(json.restaurants)})
      })

    
    
    
     
    }


    useEffect(()=>{
        fetchRestaurant();
    }, [])
    

                
                    function displayCards() {
                        return restaurant.length <= 6 ? restaurant.map((restaurant) => <RestaurantChild restaurantChild={restaurant}/>) : null;
                    }
                
                    return (
                    
                    <div>
                        <CardColumns>
                        {displayCards()}
                        </CardColumns>
                    </div>
                    )
}

 
export default Restaurant;