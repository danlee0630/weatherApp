import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import WeatherCard from './weatherCard';
import Forecast from './forecast';


const API = `https://api.openweathermap.org/data/2.5/onecall`
const API_KEY = `7b8c2fb2c25fc9629ddf57bbee96011f`


function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongtitude] = useState(null);
  const [temperture, setTemperture] = useState(null);
  const [feels_like, setFeels_like] = useState(null);
  const [wind_speed, setWind_speed] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [alertEvent, setAlertEvent] = useState(null);
  const [city, setCity] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [forecast, setForecast] = useState([]);
  const [forecastIcon, setForecastIcon] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongtitude(position.coords.longitude);
    });

    axios.get(`${API}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
      .then((apiData) => {
        console.log(apiData);
        setTemperture(apiData.data.current.temp)
        setFeels_like(apiData.data.current.feels_like)
        setWind_speed(apiData.data.current.wind_speed)
        setHumidity(apiData.data.current.humidity)
        setSunrise(apiData.data.current.sunrise)
        setSunset(apiData.data.current.sunset)
        setAlertEvent(apiData.data.alerts[0].event)
        setCity(apiData.data.timezone)
        setWeatherIcon(apiData.data.current.weather[0].main)

        setForecast(apiData.data.daily)
        setForecastIcon(apiData.data.daily[0].weather[0].main)
      })
  }, [latitude, longitude])

  return (
    <div class="main">
      <Header />
      <WeatherCard
        temperture={temperture}
        city={city}
        wind_speed={wind_speed}
        humidity={humidity}
        sunset={sunset}
        sunrise={sunrise}
        alertEvent={alertEvent}
        feels_like={feels_like}
        weatherIcon={weatherIcon}
      />
      <Forecast
        forecast={forecast}
      />
    </div>
  );
}

export default App;