import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Filter from './components/Filter';

const moviesData = [
  {
    title: 'Inception',
    description: 'A mind-bending thriller about dream manipulation.',
    posterURL: 'inception-poster.jpg',
    rating: 8.8,
    trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0',
  },
  
];

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  const handleFilter = (title, rating) => {
    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating ? movie.rating >= parseFloat(rating) : true)
      );
    });
    setFilteredMovies(filtered);
  };

  return (
    <Router>
      <div>
        <Filter onFilter={handleFilter} />
        <Routes>
          <Route path="/" element={<MovieList movies={filteredMovies} />} />
          <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
