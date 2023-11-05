import React, {useState, useEffect} from "react";
import axios from "axios";
import './DailyForecast.css';
import WeatherForecastDay from "./WeatherForecastDay";

export default function DailyForecast(props) {
    console.log(props.data.coordinates);
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);   
    
    useEffect(() => {
        setLoaded(false);
    }, [props.data.coordinates]);
    

    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }


    console.log(props);

    if (loaded) {
        console.log(forecast);
        return (
            <div className="forecast-week">
                {forecast.map(function (dailyForecast, index) {
                    if (index < 5) {
                        return(
                            <div className="week" key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        );
                    }
            })}
            </div>
        );

         
    }else {
        let apiKey = "d48505t8703c543fo79ae4f4d413e7bf"
        let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}`;
    
        axios.get(apiUrl).then(handleResponse); 
        return null;  
    }

}