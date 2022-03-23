import React, { useState, useEffect , useContext} from 'react'
import Mapbox from './Mapbox';
import Sidebar from './Sidebar';
import Weathercontext from './context/Weathercontext';
const Home = () => {
    const {getWeather} = useContext(Weathercontext);
    const time  = new Date();
    const hour = time.getHours();
    const [city, setCity] = useState('Mehdawal');
    const handleOnChange = (e)=>{
        setCity(e.target.value);
        getWeather(e.target.value);
    }
    
    return (
        <>
            <div style={{ minHeight: 'calc(100vh - 44px)' }} className="md:flex-row flex flex-col w-full box-border bg-gray-600 p-1">
                <div className="bg-gray-400 box-border p-2 home-location rounded">
                    <div className="w-full flex justify-between box-border">
                        <div className="w-1/2 flex justify-start flex-col text-white">
                            {(hour<12)? <h2 className='text-xl'>Good Morning</h2>:(hour<18)?<h2 className='text-xl'>Good Afternoon</h2>:<h2 className='text-xl'>Good Evening</h2>}
                            <p>Have a nice day!</p>
                        </div>
                        <div className="flex items-center text-2xl text-white">
                            <h2>{`${time.getHours()} : ${time.getMinutes() < 10 ? '0'+time.getMinutes(): time.getMinutes()}`}</h2>
                        </div>
                    </div>
                    <form onSubmit={(e)=>{e.preventDefault()}} className="w-full flex box-border items-center p-2 mt-1 bg-gray-200 rounded">
                        <input type="search" onChange={handleOnChange} className='border-0 w-full focus:outline-none bg-transparent' name='city' placeholder='Search your location..' required />
                        <button type='submit'> <i className="bi bi-search text-gray-400"></i> </button>
                    </form>
                    <Mapbox city={city}/>
                </div>
                <div className="bg-gray-400 box-border p-1 home-sidebar rounded">
                   <Sidebar/>
                </div>
            </div>
        </>
    )
}

export default Home