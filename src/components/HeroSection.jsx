import React from 'react'
import background from '../assets/netflix background.jpg'

const HeroSection = () => {
  return (
    <div className="flex align-center justify-center h-screen w-full p-10 flex-col" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }  }>
        <h1 className="text-7xl font-bold text-white text-center">Your Movie Journey Starts Here...</h1>
        <p className="text-white mt-4 text-center text-2xl">Explore the latest movies and find your next favorite!</p>
        <div className='flex justify-center mt-6'>
        <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300 hover:cursor-pointer">Get Started</button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-center">
            <p className="text-white">© 2025 Movie App. All rights reserved.</p>
        </div>
    </div>
  )
}

export default HeroSection
