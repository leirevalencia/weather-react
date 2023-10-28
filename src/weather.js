import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import DailyForecast from "./DailyForecast";
import './weather.css';
import axios from "axios";

export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            date: new Date(response.data.time * 1000),
            wind: response.data.wind.speed,
            city: response.data.city,
            description: response.data.condition.description,
            iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
        });
        setReady(true);
    }

function search() {
    const apiKey= "d48505t8703c543fo79ae4f4d413e7bf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

}

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCity(event) {
        setCity(event.target.value);
    }

    if (ready) {
        return (
            <div className="weather">
                <form className="searchbox" onSubmit={handleSubmit}>
                    <input 
                    onChange={handleCity}
                    type="search"
                    className="search"
                    placeholder="🐾 Search city ..."
                    autoFocus
                    id="Search"
                    />
                    <input
                    type="submit"
                    className="button"
                    value="Search"
                    />
                </form>
                <WeatherInfo data={weatherData} />
                <DailyForecast data={weatherData} />
            </div>
        );
    } else {
        search();
        return 'the app is loading...';
    }
}