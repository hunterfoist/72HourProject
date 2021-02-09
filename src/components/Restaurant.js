import React, { useEffect, useState } from 'react';
import {
    CardColumns
  } from 'reactstrap';

  import RestaurantChild from './RestaurantChild'
  

  
  
const Restaurant = (props) => {
    const [restaurant, setRestaurant] = useState([])

    function fetchRestaurant() {
    
    let lat = props.latitude;
    
    const url = `https://developers.zomato.com/api/v2.1/search?count=6&lat=${lat}&lon=${props.longitude}`

    fetch(url, {
        headers: {"user-key": "ae62c29dc6ca220342b1493a1cb740e7", "content-type": "application/json"}})
    .then(res => res.json())
    .then(json => {
        setRestaurant(json.restaurants)
        console.log(json.restaurants)})
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