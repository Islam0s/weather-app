import React, { useEffect, useState, useRef} from 'react'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import snow_icon from '../assets/snow.png'
import rain_icon from '../assets/rain.png'

const Weather = () => {
  const inputRef =useRef()
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  }

  const search = async (city) => {
    if (city === "") {
      alert("Enter a city name.");
      return;
      
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon 
      })
    } catch (error) {
      console.error(error);

    }

  }
  useEffect(() => {
    search("London");
  
  }, [])
  
      
  return( 
    <section className="flex justify-center items-center w-full h-screen"> 
      <div className="bg-blue-600 p-10 rounded-lg">

        <div className="flex justify-center gap-3">
          <input ref={inputRef} type="text" placeholder="Enter a city." className="bg-white rounded-lg p-2" />
          <img src={search_icon} alt="" className="bg-white rounded-full p-2.5" onClick={()=>search(inputRef.current.value)}/> 
        </div>
        
        <div className="flex-col flex text-center text-teal-50 text-lg justify-center items-center pt-5">
          <img src={weatherData.icon} alt="" className="w-40 h-40"/>
          <p className="text-4xl font-bold">{weatherData.location}</p>
          <p className="text-2xl mt-4 font-bold">{weatherData.temperature}°C</p> 
        </div>

        <div className="flex gap-20 pt-10 justify-between text-teal-50">
          <div className="flex flex-col justify-center items-center text-center">
            <img src={humidity_icon} alt="" className="w-12 h-12 m-5"/>
            <p>{weatherData.humidity} %</p>
            <span>Humidity</span> 
          </div>
          
          <div className="flex-col flex justify-center items-center text-center">
            <img src={wind_icon} alt="" className="w-12 h-12 m-5"/>
            <p>{weatherData.windSpeed} Km/h</p>
            <span>Wind speed</span>
            
          </div>
          
        </div>
      </div>

         
    </section>
  );
}




    
export default Weather
