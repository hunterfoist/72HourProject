import React from 'react';

import {
    Card, Button, CardImg, CardTitle,
    CardSubtitle, CardBody
  } from 'reactstrap';

const RestaurantChild = (props) => {
    return ( 
        <Card>
        <CardImg top width="100%" src={props.restaurantChild.restaurant.thumb} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.restaurantChild.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.restaurantChild.location.locality}</CardSubtitle>
          {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText> */}
          <Button>More Info</Button>
        </CardBody>
      </Card>
 );
}
 
export default RestaurantChild;