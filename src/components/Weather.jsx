import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'
const Weather = () => {
  return(
    <section className="flex justify-center items-center w-full h-screen">
      <div className="bg-blue-600 p-10 rounded-lg">

        <div className="flex justify-center gap-3">
          <input type="text" placeholder="Enter a city." className="bg-white rounded-lg p-2" />
          <img src={search_icon} alt="" className="bg-white rounded-full p-2.5"/> 
        </div>
        
        <div className="flex-col flex text-center text-teal-50 text-lg justify-center items-center pt-5">
          <img src={clear_icon} alt="" className="w-40 h-40"/>
          <p className="text-4xl font-bold">London</p>
          <p className="text-2xl mt-4 font-bold">18°C</p> 
        </div>

        <div className="flex gap-20 pt-10 justify-between text-teal-50">
          <div className="flex flex-col justify-center items-center text-center">
            <img src={humidity_icon} alt="" className="w-12 h-12 m-5"/>
            <p>80%</p>
            <span>Humidity</span> 
          </div>
          
          <div className="flex-col flex justify-center items-center text-center">
            <img src={wind_icon} alt="" className="w-12 h-12 m-5"/>
            <p>2.5 Km/h</p>
            <span>Wind speed</span>
            
          </div>
          
        </div>
      </div>

         
    </section>
  )
}




    
export default Weather
