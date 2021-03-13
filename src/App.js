
import Nasa from './components/Nasa';
import { useState, useEffect } from 'react';
import './App.css';
import Restaurant from './components/Restaurant';
import Weather from './components/Weather';

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
      return longitude === 0 ? '' : <> <Restaurant latitude={latitude} longitude={longitude}/> <Weather latitude={latitude} longitude={longitude}/> <Nasa latitude={latitude} longitude={longitude}/> </>
    }

  
  
  return (
    <div className="App">
      <h1>Minority Report</h1>
      {<header className="App-header">
        <h1>Minority Report</h1>
        {confirmLocation()}
        
      </header>}
    </div>
  );
}


export default App;
