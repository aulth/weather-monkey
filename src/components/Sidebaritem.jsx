import React from 'react'

const Sidebaritem = (props) => {
  const {hour} = props;
  const fToC = (f)=>{
    return ((5/9)*(f-32)).toFixed(2)
}
  return (
    <div className="w-full flex justify-between items-center">
        <h2 className="text-lg">{hour.datetime.slice(0,5)}</h2>
        <h2 className="text-lg">{fToC(hour.temp)}°C</h2>
        <h2 style={{width:'90px'}} className="text-lg text-center">{hour.conditions}</h2>
        <img src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${hour.icon}.png`}  style={{ width: '40px' }} alt="icon" />
    </div>
  )
}

export default Sidebaritem