import React, { useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'A mind-bending thriller', rating: 9.0 },
    { title: 'The Matrix', description: 'A hacker discovers a shocking truth about reality', rating: 8.7 },
  ]);
  const [filter, setFilter] = useState('');

  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="App">
      <h1>Debugging Movie App by Ighalo</h1>
      <Filter setFilter={setFilter} />
      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
