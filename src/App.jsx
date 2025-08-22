import React from 'react'
import MoviesList from './components/MoviesList'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MoviesList />
    </div>
  )
}

export default App
