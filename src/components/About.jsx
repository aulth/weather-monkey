import React from 'react'

const About = () => {
  return (
    <>
    <div style={{minHeight:'calc(100vh - 44px)'}} className="w-full text-white bg-gray-400 flex flex-col items-center box-border pt-4">
        <h2 className="text-2xl">
            About
        </h2>
        <p className="text-lg">
            Weather data are being fetched from https://weather.visualcrossing.com/
        </p>
        <p className="text-lg">Created with <i class="bi bi-heart-fill text-red-500"></i> by <a className='text-black' href="https://aulth.github.io/usman">Mohd Usman</a></p>
    </div>
    </>
  )
}

export default About