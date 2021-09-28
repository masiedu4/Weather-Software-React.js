import React from "react";

const WeatherSearch = (props) => {
  return (
    <div className="weather-search">
      <form onSubmit={props.apiCall} className="weather-search__form">
        <input
          name="location"
          autoComplete="off"
          className="weather-search__input"
          type="text"
          required
        />
        <div className="weather-search__submit">
          <button className="weather-search__button">&rarr;</button>
        </div>
      </form>
    </div>
  );
};

export default WeatherSearch;
