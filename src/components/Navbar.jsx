import React from 'react'

const Navbar = () => {
  return (
    <div className='mx-auto my-auto py-2'>
    <nav className="bg-gray-800 p-4 flex justify-between items-center mx-auto my-auto">
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-white hover:text-gray-300 hover:cursor-pointer">Movie App</h1>
        </div>
        <div className="container mx-auto mt-2">
            <ul className="flex space-x-4 justify-evenly align-center">  
                <li><a href="#" className="text-white hover:underline hover:text-gray-300 hover:cursor-pointer">Home</a></li>
                <li><a href="#" className="text-white hover:underline hover:text-gray-300 hover:cursor-pointer">About</a></li>
                <li><a href="#" className="text-white hover:underline hover:text-gray-300 hover:cursor-pointer">Contact</a></li>
            </ul>
        </div>       
    </nav>
    </div>
  )
}

export default Navbar
