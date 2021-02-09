
import './App.css';
import Nasa from './components/Nasa';
import React, {useState, useEffect} from 'react'

function App() {

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
    
  
    function getLocation(position) {
  setLatitude(position.coords.latitude);
  setLongitude(position.coords.longitude);
    }
    
    useEffect(() => {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getLocation);
  }
    })

    console.log(latitude, longitude)
    function confirmLocation() {
      return longitude === 0 ? '' : <Nasa latitude={latitude} longitude={longitude}/>
    } 
  
  
    return (
    <div className="App">
      {confirmLocation()}
    </div>
  );
}

export default App;
