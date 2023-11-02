import React from "react";
import './DailyForecast.css';

export default function WeatherForecastDay(props) {
    
    return(
        <div className="days">
            <p className="day">
                mon
            </p>
            <img 
                src={props.data[0].condition.icon_url}
                alt={props.data.description}
            />
            <p className="max-min">
                <span ClassName="min-temperature">
                    {Math.round(props.data[0].temperature.minimum)}º | 
                </span>
                <span className="max-temperature">
                    {Math.round(props.data[0].temperature.maximum)}º
                </span>
            </p>
    </div>

    );
}