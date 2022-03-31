import React from "react";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import moment from 'moment';
import {
    WiSunrise, WiSunset, WiHumidity, WiThermometerExterior, WiThermometer, WiStrongWind
} from "react-icons/wi";
import { BsClouds, BsCloudDrizzle, BsCloudRain, BsCloudSnow, BsCloudHaze1 } from "react-icons/bs";
import { IoThunderstormOutline, IoSunnyOutline } from "react-icons/io5";

export default function Forecast({ forecast, forecastIcon }) {

    let showForecastIcon = null;

    if (forecastIcon === 'Clouds') {
        showForecastIcon = <BsClouds size="25px" />
    }
    else if (forecastIcon === 'Thunderstorm') {
        showForecastIcon = <IoThunderstormOutline size="25px" />
    }
    else if (forecastIcon === 'Drizzle') {
        showForecastIcon = <BsCloudDrizzle size="25px" />
    }
    else if (forecastIcon === 'Rain') {
        showForecastIcon = <BsCloudRain size="25px" />
    }
    else if (forecastIcon === 'Snow') {
        showForecastIcon = <BsCloudSnow size="25px" />
    }
    else if (forecastIcon === 'Clear') {
        showForecastIcon = <IoSunnyOutline size="25px" />
    }
    else if (forecastIcon === 'Haze') {
        showForecastIcon = <BsCloudHaze1 size="25px" />
    }
    else if (forecastIcon === 'Mist') {
        showForecastIcon = <BsCloudHaze1 size="25px" />
    }
    else if (forecastIcon === 'Smoke') {
        showForecastIcon = <BsCloudHaze1 size="25px" />
    }
    else if (forecastIcon === 'Dust') {
        showForecastIcon = <BsCloudHaze1 size="25px" />
    }
    else if (forecastIcon === 'Fog') {
        showForecastIcon = <BsCloudHaze1 size="25px" />
    }
    else if (forecastIcon === 'Sand') {
        showForecastIcon = <BsCloudHaze1 size="25px" />
    }
    else if (forecastIcon === 'Dust') {
        showForecastIcon = <BsCloudHaze1 size="25px" />
    }
    else if (forecastIcon === 'Ash') {
        showForecastIcon = <BsCloudHaze1 size="25px" />
    }
    else if (forecastIcon === 'Squall') {
        showForecastIcon = <BsCloudHaze1 size="25px" />
    }
    else if (forecastIcon === 'Tornado') {
        showForecastIcon = <BsCloudHaze1 size="25px" />
    }


    return (
        <div class="forecast-main">
            <Row xs={2} md={4}>
                {forecast.map((data) => {
                    return (
                        <Card border="dark">
                            <><Card.Header>
                                <div className="forecast-card-title">
                                    {moment.unix(data.dt).format('MMM Do, dddd')}
                                </div>
                            </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <div class="forecast-card-description">{showForecastIcon}    {data.weather[0].description}</div>
                                        <div className="forecast-card">
                                            <div className="forecast-card-content">
                                                <WiThermometerExterior size="20px" color="darkblue" /> {Math.round(data.temp.min)} &deg;C
                                            </div>
                                            <div className="forecast-card-content">
                                                <WiThermometer size="20px" color="red" /> {Math.round(data.temp.max)} &deg;C
                                            </div>
                                        </div>
                                        <div className="forecast-card">
                                            <div className="forecast-card-content">
                                                <WiHumidity size="20px" color="blue" /> {data.humidity} %
                                            </div>
                                            <div className="forecast-card-content">
                                                <WiStrongWind size="20px" color="green" /> {data.wind_speed} m/s
                                            </div>
                                        </div>
                                        <div className="forecast-card">
                                            <div className="forecast-card-content">
                                                <WiSunrise size="20px" color="purple" /> {new Date(data.sunrise * 1000).toLocaleTimeString('en-IN')}
                                            </div>
                                            <div className="forecast-card-content">
                                                <WiSunset size="20px" color="orange" /> {new Date(data.sunset * 1000).toLocaleTimeString('en-IN')}
                                            </div>
                                        </div>
                                    </Card.Text>
                                </Card.Body></>
                        </Card>

                    )
                })}
            </Row>

        </div>
    )

}