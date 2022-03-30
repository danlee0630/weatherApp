import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import WeatherCard from './weatherCard';


const API = `https://api.openweathermap.org/data/2.5/onecall`
const API_KEY = `7b8c2fb2c25fc9629ddf57bbee96011f`


function App() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongtitude] = useState(null);
    const [city, setCity] = useState('');
    const [temperture, setTemperture] = useState(null);
    const [feels_like, setfeels_like] = useState(null);
    const [humidity, sethumidity] = useState(null);
    const [sunrise, setsunrise] = useState(null);
    const [sunset, setsunset] = useState(null);

    useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongtitude(position.coords.longitude);
    });

    axios.get(`${API}?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_KEY}`)
    .then((apiData) =>{
      console.log(apiData);
      setTemperture(apiData.data.current.temp)
      setfeels_like(apiData.data.current.feels_like)
      sethumidity(apiData.data.current.humidity)
      setsunrise(apiData.data.current.sunrise)
      setsunset(apiData.data.current.sunset)
      setCity(apiData.data.timezone)
    })
  }, [latitude, longitude])

  return (
    <div class="main">
      <Header/>
      <WeatherCard 
      temperture={temperture}
      city={city}
      humidity={humidity}
      sunset={sunset}
      sunrise={sunrise}
      feels_like={feels_like}/>
    </div>
  );
}

export default App;