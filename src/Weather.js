import React from "react";

const Weather = ({ data }) => {
    const { main, weather, name } = data;
    const temperature = main.temp;
    const description = weather[0].description;
  
    return (
      <div className="weather">
        <h2>{name}</h2>
        <p>Temperature: {temperature}°C</p>
        <p>Description: {description}</p>
        
      </div>
    );
  };

export default Weather;