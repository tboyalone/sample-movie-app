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

  const [expandedMovieId, setExpandedMovieId] = React.useState(null);

 const toggleReadMore = (id) => {
    setExpandedMovieId(expandedMovieId === id ? null : id);
  };

  const [seachValue, setSearchValue] = React.useState('');

  const filteredMovies = moviesData.filter((movie) => {
    return movie.original_title.toLowerCase().includes(seachValue.toLowerCase());
  });

  return (
    <div className="container mx-auto my-10 p-4">
      <h1 className="text-3xl font-bold text-center">All Movies</h1>
      <div className="flex justify-center mt-4">
        {/* Search input field */}
        <form className="flex items-center">
          <input
            type="text"
            value={seachValue}
            placeholder="Search for a movie..."
            className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent md:w-100"
            onChange={(e) => {
              setSearchValue(e.target.value), filteredMovies;
            }}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 text-white rounded-r-lg hover:bg-red-700 transition duration-300 h-10"
            onClick={(e) => {
              e.preventDefault(), setSearchValue("");
            }}
          >
            Clear
          </button>
        </form>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredMovies.map((movie) => (
            // Using the movie id as the key for each movie card
            <div
              key={movie.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={movie.poster_path}
                alt={movie.original_title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold text-white mt-2">
                {movie.original_title}
              </h2>
              <p
                className={
                  expandedMovieId === movie.id
                    ? "text-white"
                    : "text-white line-clamp-3"
                }
              >
                {movie.overview}
              </p>
              <button
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300 hover:cursor-pointer"
                onClick={() => toggleReadMore(movie.id)}
              >
                {expandedMovieId === movie.id ? "Read Less..." : "Read More..."}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviesList
