
import { useState, useEffect } from 'react';
import './App.css';
import Restaurant from './components/Restaurant'

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
      return longitude === 0 ? '' : <Restaurant latitude={latitude} longitude={longitude}/>
    }

  
  
  return (
    <div className="App">
      {<header className="App-header">
        {confirmLocation()}
      </header>}
    </div>
  );
}


export default App;
