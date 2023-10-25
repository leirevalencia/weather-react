import React from "react";
import FormattedDate from "./FormattedDate";
import './weather.css';


export default function WeatherInfo (props) {
    return(
        <div>
                 <div className="Content">
                    <h1 id="city">{props.data.city}</h1>
                    <h2 id="date-time">
                        <FormattedDate date={props.data.date} />
                    </h2>
                    <p id="description">  {props.data.description} </p>
                </div>
                <div className="weather-info">
                    <div className="description">
                        <img
                        src={props.data.iconUrl}
                        alt={props.data.description}
                        className="float-left"
                        />
                        <p className="image">🌥</p>
                        <p className="temperature" id="temperature">
                            {Math.round(props.data.temperature)}
                        </p>
                        <p className="grades">
                            <a href="#" id="celsius">
                                {" "}
                                ºC | {" "}
                            </a>
                            <a href="#" id="fahrenheit">
                                {" "}
                                ºF {" "}
                            </a>
                        </p>
                    </div>
                    <div className="info">
                        
                        <p className="wind">
                            <strong>🌬 Wind Speed:</strong>
                            <span id="wind-speed"> {Math.round(props.data.wind)} km/h </span>
                        </p>
                        <p className="humidity">
                            <strong>💧 Humidity:</strong>
                            <span id="humid"> {props.data.humidity} % </span>
                        </p>
                        <p className="moon">
                            <strong>🌚 Moon phase:</strong>
                            <span id="moon-phase"> cuarto creciente</span>
                        </p>
                        
                    </div>
                </div>

        </div>
    );
}