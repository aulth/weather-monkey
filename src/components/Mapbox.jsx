import React, { useContext, useEffect} from 'react'
import Weathercontext from './context/Weathercontext';
const Mapbox = (props) => {
    const {getWeather, weather} = useContext(Weathercontext);
    const {city} = props;
    const mapBox = {
        height: 'calc(100vh - 160px)',
    }
    useEffect(() => {
      getWeather(city);
      //eslint-disable-next-line
    }, [])
    const fToC = (f)=>{
        return ((5/9)*(f-32)).toFixed(2)
    }
  return (
    <div style={mapBox} className="w-full mt-1 map-box rounded">
                        <iframe title='Map' src={city?`https://www.google.com/maps/embed/v1/place?key=AIzaSyB60JyHXRYxHehmNz9b5IAiL4SPgW2KheI&q=${city}`:`https://www.google.com/maps/embed/v1/place?key=AIzaSyB60JyHXRYxHehmNz9b5IAiL4SPgW2KheI&q=Satti Buzurg`} style={mapBox} className="w-full map-box rounded"></iframe>
                        <div className="map-box-inside flex justify-center items-center text-white">
                            {weather && weather.queryCost===1 && <>
                                <div className="flex flex-col items-center map-box-data rounded ">
                                <div className="flex justify-center">
                                    <img src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${weather.days[0].icon}.png`} style={{ width: '56px' }} alt="" />
                                    <div className="w-full flex flex-col ml-1">
                                        <h2 className="text-2xl">Today</h2>
                                        {/* <p> {`${time.getDate()}-${time.getMonth()<8?`0${time.getMonth()+1}`:time.getMonth()+1}-${time.getFullYear()}`} </p> */}
                                        <p>{weather.days[0].datetime}</p>
                                    </div>
                                </div>
                                <h2 className="text-3xl  font-bold">
                                    {fToC(weather.days[0].temp)}° C
                                </h2>
                                <h2 className="text-xl">
                                    {city?weather.resolvedAddress:'Satti Buzurg'}
                                </h2>
                                <p className='text-lg'>Max {fToC(weather.days[0].tempmax)}° C , Min {fToC(weather.days[0].tempmin)}° C </p>
                                <p>Sunrise {weather.days[0].sunrise} , Sunset {weather.days[0].sunset} </p>
                            </div>
                            </>}
                        </div>
                    </div>
  )
}

export default Mapbox