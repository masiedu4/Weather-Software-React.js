/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 28/09/2021 - 17:59:09
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/09/2021
    * - Author          : Michael
    * - Modification    : 
**/
import React, { useState } from "react";
import axios from "axios";

import Header from "./Header";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import DateTime from "./DateTime";
import Tagline from "./Tagline";
import Footer from "./Footer";

import FadeIn from "react-fade-in/lib/FadeIn";

const Main = () => {
  const [weather, setWeather] = useState();

  const api_call = async (event) => {
    event.preventDefault();

    const location = event.target.elements.location.value;

    const API_KEY = "4780e8b7b5a384ace96dc0b10a0c580b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

    const request = axios.get(url);
    const response = await request;
    setWeather(response);
  };

  console.log(weather);

  return (
    <div className="main">
      <Header />
      <Content>
        <Tagline />
        <DateTime />
        <WeatherSearch apiCall={api_call} />
        {weather && (
          <FadeIn> <WeatherData
            // obtainin the values from the api and passing it to WeatherData.jsx as props
            countryName={weather.data.sys.country}
            cityName={weather.data.name}
            weatherInfo={weather.data.main}
          />
          </FadeIn>
        )}
      </Content>
      <Footer />
    </div>
  );
};

export default Main;
