import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="box-border p-2 bg-gray-800 w-full flex text-white justify-between">
        <Link to="/" className="text-xl">Weather Monkey</Link>
        <nav>
            <ul className='flex'>
                <Link to="/about" className='mx-1 text-lg'>About</Link>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar