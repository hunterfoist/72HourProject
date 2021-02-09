
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

  
  
  return (
    <div className="App">
      <header className="App-header">
        <Restaurant latitude={latitude} longitude={longitude} />
      </header>
    </div>
  );
}


export default App;
