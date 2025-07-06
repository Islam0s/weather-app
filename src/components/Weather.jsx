import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'

const Weather = () => {
  return(
    <section className="flex justify-center items-center w-full h-screen">
      <div className="bg-blue-600 h-100 p-10 w-100 rounded-lg">

        <div className="flex justify-center gap-3">
          <input type="text" placeholder="Enter a city." className="bg-white rounded-lg p-2" />
          <img src={search_icon} alt="" className="bg-white rounded-full p-2.5"/> 
        </div>
        
        <div className="flex-col flex text-center text-teal-50 text-lg justify-center items-center pt-10">
          <img src={clear_icon} alt="" className="w-28 h-28"/>
          <p>London</p>
          <p>18C</p>
          
        </div>
      </div>

      
    </section>
  )
}




    
export default Weather
