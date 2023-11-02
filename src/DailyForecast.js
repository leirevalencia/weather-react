import React, {useState} from "react";
import axios from "axios";
import './DailyForecast.css';
import WeatherForecastDay from "./WeatherForecastDay";

export default function DailyForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);    
    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }
    console.log(props);

    if (loaded) {
        console.log(forecast);
        return (
            <div className="week">
                <WeatherForecastDay data={forecast[0]} />
            </div>
        );

         
    }else {
        let apiKey = "d48505t8703c543fo79ae4f4d413e7bf"
        let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query={query}&key=${apiKey}`;
    
        axios.get(apiUrl).then(handleResponse); 
        return null;  
    }

}