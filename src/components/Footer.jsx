import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-800 p-4 mt-10">
            <div className="container mx-auto text-center">
                <p className="text-white">&copy; 2024 Movie App. All rights reserved.</p>
                <p className="text-white">Developed by Oluwatobi Ogungbe</p>
                <p className="text-white">Contact: <a href="mailto:oogungbe@shadengsl.com" className="text-blue-500 hover:underline">oogungbe@shadengsl.com</a></p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
