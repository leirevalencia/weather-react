import React from "react";
import './DailyForecast.css';

export default function WeatherForecastDay(props) {
    function maxTemperature(){
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}º`;
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}º`;
        }

    function day() {
        let date = new Date(props.data.time*1000);
        let day = date.getDay();

        let days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
        return days[day];
    }

    return(
        <div className="days">
            <p className="day">
                {day()}
            </p>
            <img 
                src={props.data.condition.icon_url}
                alt={props.data.condition.description}
            />
            <p className="max-min">
                <span ClassName="min-temperature">
                    {minTemperature()} | 
                </span>
                <span className="max-temperature">
                    {maxTemperature()}
                </span>
            </p>
    </div>

    );
}