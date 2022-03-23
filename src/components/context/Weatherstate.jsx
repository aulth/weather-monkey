import React, {useState} from 'react'
import Weathercontext from './Weathercontext'
const Weatherstate = (props) => {
    const [weather, setWeather] = useState({})
    const getWeather =async (city)=>{
        const host = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.REACT_APP_API} `
        const response = await fetch(host, {
            method:'GET',
        })
        const data = await response.json();
        setWeather(data)
    }
  return (
    <Weathercontext.Provider value={{getWeather, weather}}>
        {props.children}
    </Weathercontext.Provider>
  )
}

export default Weatherstate