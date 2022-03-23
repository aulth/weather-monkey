import React, {useContext} from 'react'
import Sidebaritem from './Sidebaritem'
import Weathercontext from './context/Weathercontext'
const Sidebar = (props) => {
  const {weather} = useContext(Weathercontext);

  return (
    <div className="w-full overflow-y-auto">
        <ul style={{height:'calc(100vh - 44px)'}}>
        {weather && weather.queryCost===1 && weather.days[0].hours.map((hour, index)=>{
          return <Sidebaritem key={index} hour={hour}/>
        })}
        </ul>
    </div>
  )
}

export default Sidebar