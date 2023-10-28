import React from "react";
import axios from "axios";
import './DailyForecast.css';

export default function DailyForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    console.log(props);

    let apiKey = "d48505t8703c543fo79ae4f4d413e7bf"
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query={query}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="week">
            <div className="days">
                <p className="day">
                    mon
                </p>
                <img 
                    src={props.data.iconUrl}
                    alt={props.data.description}
                />
                <p className="max-min">
                    <span ClassName="min-temperature">
                        13º
                    </span>
                    <span className="max-temperature">
                        20º
                    </span>
                </p>
            </div>
        </div>
    );
}