import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 9.0,
    },
    {
      title: 'The Matrix',
      description: 'A hacker discovers a shocking truth about reality.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 8.7,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const filterMovies = (title, rating) => {
    let filtered = movies;
    if (title) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (rating) {
      filtered = filtered.filter((movie) => movie.rating >= parseFloat(rating));
    }
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <h1>Movie App by Ighalo</h1>
      <Filter onFilter={filterMovies} />
      <MovieList movies={filteredMovies} />
      <button
        onClick={() =>
          addMovie({
            title: 'Interstellar',
            description: 'A journey through space and time.',
            posterURL: 'https://via.placeholder.com/150',
            rating: 8.6,
          })
        }
      >
        Add Movie
      </button>
    </div>
  );
};

export default App;
