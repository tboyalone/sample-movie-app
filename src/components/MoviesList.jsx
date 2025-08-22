import React from 'react'
import moviesData from './Data'

  const paragraphStyleReadMore = "text-white mt-2 text-center text-2xl font-bold hover:text-gray-300 hover:cursor-pointer";
    
  // const paragraphStyleReadMore = {
  //   color: 'white',
  //   fontSize: '18px',
  //   marginTop: '20px',
  //   webkitlineClamp: 3,
  //   webkitBoxOrient: 'vertical',
  //   overflow: 'hidden',
  //   display: '-webkit-box'
  // };

  const paragraphStyleReadLess = {
    color: 'white',
    fontSize: '18px',
    marginTop: '20px',
    webkitlineClamp: 3,
    webkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box'
  };

const MoviesList = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleReadMore = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container mx-auto my-10 p-4'>
      <h1 className='text-3xl font-bold text-center'>All Movies</h1>
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
          {moviesData.map((movie) => (
            // Using the movie id as the key for each movie card
            <div key={movie.id} className='bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <img src={movie.poster_path} alt={movie.original_title} className='w-full h-64 object-cover rounded-t-lg' />
              <h2 className='text-xl font-semibold text-white mt-2'>{movie.original_title}</h2>
              <p className={isOpen ? 'text-white': 'text-white line-clamp-3'}
              >{movie.overview}</p>
              <button className='mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300 hover:cursor-pointer' onClick={toggleReadMore}>{isOpen ? "Read Less..." : "Read More..."}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MoviesList
