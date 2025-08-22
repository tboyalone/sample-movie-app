import React from 'react'
import MoviesList from './components/MoviesList'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MoviesList />
      <Footer />
    </div>
  )
}

export default App
