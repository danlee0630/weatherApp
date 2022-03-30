import React from "react";
import Card from 'react-bootstrap/Card'


export default function WeatherCard({temperture, feels_like, city, humidity, sunset, sunrise}){
    return (
        <div>
  <Card border="dark" style={{ width: '16rem' }}>
    <Card.Header>{city}</Card.Header>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        <h6>Date</h6>
        <div className="weather-card">
          <div className="weather-card-content">
            {temperture}
          </div>
          <div className="weather-card-content">
            {feels_like}
          </div>
        </div>
        <div className="weather-card">
          <div className="weather-card-content">
            
          </div>
          <div className="weather-card-content">
            {humidity}
          </div>
        </div>
        <div className="weather-card">
          <div className="weather-card-content">
            {sunrise}
          </div>
          <div className="weather-card-content">
            {sunset}
          </div>
        </div>
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
        </div>
  );
}
