import React, { useEffect, useState } from 'react';
import {
    CardColumns
  } from 'reactstrap';

  import RestaurantChild from './RestaurantChild'

  
  
const Restaurant = () => {
    const [restaurant, setRestaurant] = useState([])

    navigator.geolocation.getCurrentPosition(function fetchRestaurant (position) {
        console.log("Latitude is :", lat);
        console.log("Longitude is :", long);
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    
    
    
      
    const url = fetch(`https://developers.zomato.com/api/v2.1/search?count=6lat=${lat}&lon=${long}`,{
        headers: {"user-key": "ae62c29dc6ca220342b1493a1cb740e7", "content-type": "application/json"}
      })

    
    
        fetch(url)
        .then(res => res.json())
        .then(json => {
            setRestaurant(json.results)
            console.log(json.results)})
        
            
    })

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