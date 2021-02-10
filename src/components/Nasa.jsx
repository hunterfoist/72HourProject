import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
const baseURL = "https://api.nasa.gov/planetary/earth/imagery/";
const api_key = "rPsIFDD0deVKO9mzRV3yoJElshSPhgCUljqHIH4C";

const Nasa = (props) => {
  const [image, setImage] = useState([]);

  function fetchNasaImage() {
    const url = `${baseURL}?lon=${props.longitude}&lat=${props.latitude}&date=2014-06-06&dim=.5&api_key=${api_key}`;
    console.log(url);

    fetch(url)
      .then((res) => res)
      .then((data) => {
        setImage(data.url);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchNasaImage();
  }, []);

  return (
    <div>
      
      <Card>
        <CardBody>
          
          <CardImg src={image}></CardImg>
        </CardBody>
      </Card>
    </div>
  );
};

export default Nasa;
