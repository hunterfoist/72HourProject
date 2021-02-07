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
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.restaurantChild.restaurant.location.locality_verbose}</CardSubtitle>
          {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText> */}
          <Button color="secondary" size="lg" href={props.restaurantChild.restaurant.url} target="blank">More info about this restaurant</Button>
        </CardBody>
      </Card>
 );
}
 
export default RestaurantChild;