import search_icon from '../assets/search.png'

const Weather = () => {
  return(
    <div className="flex justify-center bg-blue-600 items-center">

      <div className="flex gap-3.5">
        <input type="text" placeholder="Search" className="bg-white rounded-lg"/>
        <img src={search_icon} alt=""/>
      </div>

    </div>
  )
}




    
export default Weather
