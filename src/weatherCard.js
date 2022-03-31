import React from "react";
import Card from 'react-bootstrap/Card'
import moment from 'moment';
import {
  WiSunrise, WiSunset, WiHumidity, WiThermometer, WiStrongWind
} from "react-icons/wi";
import { BsClouds, BsCloudDrizzle, BsCloudRain, BsCloudSnow, BsCloudHaze1 } from "react-icons/bs";
import { IoBody, IoThunderstormOutline, IoSunnyOutline } from "react-icons/io5";

export default function WeatherCard({ temperture, feels_like, wind_speed, humidity, sunset, sunrise, city, weatherIcon }) {

  let showWeatherIcon = null;

  if (weatherIcon === 'Clouds') {
    showWeatherIcon = <BsClouds size="50px" />
  }
  else if (weatherIcon === 'Thunderstorm') {
    showWeatherIcon = <IoThunderstormOutline size="50px" />
  }
  else if (weatherIcon === 'Drizzle') {
    showWeatherIcon = <BsCloudDrizzle size="50px" />
  }
  else if (weatherIcon === 'Rain') {
    showWeatherIcon = <BsCloudRain size="50px" />
  }
  else if (weatherIcon === 'Snow') {
    showWeatherIcon = <BsCloudSnow size="50px" />
  }
  else if (weatherIcon === 'Clear') {
    showWeatherIcon = <IoSunnyOutline size="50px" />
  }
  else if (weatherIcon === 'Haze') {
    showWeatherIcon = <BsCloudHaze1 size="50px" />
  }
  else if (weatherIcon === 'Mist') {
    showWeatherIcon = <BsCloudHaze1 size="50px" />
  }
  else if (weatherIcon === 'Smoke') {
    showWeatherIcon = <BsCloudHaze1 size="50px" />
  }
  else if (weatherIcon === 'Dust') {
    showWeatherIcon = <BsCloudHaze1 size="50px" />
  }
  else if (weatherIcon === 'Fog') {
    showWeatherIcon = <BsCloudHaze1 size="50px" />
  }
  else if (weatherIcon === 'Sand') {
    showWeatherIcon = <BsCloudHaze1 size="50px" />
  }
  else if (weatherIcon === 'Dust') {
    showWeatherIcon = <BsCloudHaze1 size="50px" />
  }
  else if (weatherIcon === 'Ash') {
    showWeatherIcon = <BsCloudHaze1 size="50px" />
  }
  else if (weatherIcon === 'Squall') {
    showWeatherIcon = <BsCloudHaze1 size="50px" />
  }
  else if (weatherIcon === 'Tornado') {
    showWeatherIcon = <BsCloudHaze1 size="50px" />
  }

  return (
    <div>
      <Card border="dark" style={{ width: '20rem' }}>
        <Card.Header className="weather-card-header">{city}</Card.Header>
        <Card.Body>
          <Card.Text>
            <h6> {moment().format('MMMM Do, dddd')}</h6>
            <div class="weatherIcon">{showWeatherIcon}</div>
            <div className="weather-card">
              <div className="weather-card-content">
                <WiThermometer size="20px" color="blue" />{Math.round(temperture)}&deg;C
              </div>
              <div className="weather-card-content">
                <IoBody size="15px" color="blue" /><WiThermometer size="20px" color="blue" /> {Math.round(feels_like)}&deg;C
              </div>
            </div>
            <div className="weather-card">
              <div className="weather-card-content">
                <WiStrongWind size="20px" color="green" /> {wind_speed} m/s
              </div>
              <div className="weather-card-content">
                <WiHumidity size="20px" color="blue" />{humidity}%
              </div>
            </div>
            <div className="weather-card">
              <div className="weather-card-content">
                <WiSunrise size="20px" color="purple" /> {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}
              </div>
              <div className="weather-card-content">
                <WiSunset size="20px" color="orange" /> {new Date(sunset * 1000).toLocaleTimeString('en-IN')}
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}