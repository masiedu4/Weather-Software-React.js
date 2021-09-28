/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 28/09/2021 - 17:59:05
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2021
    * - Author          : Michael
    * - Modification    : 
**/
import React from "react";

const WeatherData = ({ countryName, cityName, weatherInfo }) => {
  const { temp, humidity, pressure } = weatherInfo;
  return (
    <div className="weather-data">
      <p className="weather__tagline">
        Weather forecast for{" "}
        <span className="weather-data__city">
          {cityName},{countryName}
        </span>
      </p>
      <div className="weather-data__box">
        <span className="weather-data__property">
          <p className="weather-data__title">Temperature</p>
          <p className="weather-data__value">{temp}</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">Humidity</p>
          <p className="weather-data__value">{humidity}</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">Pressure</p>
          <p className="weather-data__value"> {pressure} </p>
        </span>
      </div>
    </div>
  );
};

export default WeatherData;
