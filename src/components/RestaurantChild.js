import React from 'react';

import {
    Card, Button, CardImg, CardTitle,
    CardSubtitle, CardBody, CardText, Jumbotron,
  } from 'reactstrap';

const RestaurantChild = (props) => {
    return ( 
        <Card>
        
        <CardBody>
          <CardTitle tag="h3" className="text-dark">{props.restaurantChild.restaurant.name}</CardTitle>
          
          <CardSubtitle tag="h4" className="mb-2 text-muted">{props.restaurantChild.restaurant.location.locality_verbose}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Cuisine: {props.restaurantChild.restaurant.cuisines}</CardSubtitle>
          <br/>
          <Button color="secondary" size="lg" href={props.restaurantChild.restaurant.url} target="blank">More info about this restaurant</Button>
        </CardBody>
      </Card>
 );
}
 
export default RestaurantChild;