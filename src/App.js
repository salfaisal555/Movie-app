// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';

const API_URL = 'http://www.omdbapi.com/?apikey=5463e342';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fungsi untuk mengambil data film berdasarkan query
  const fetchMovies = async (query = 'man') => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}&s=${query}`);
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk menangani pencarian film
  const handleSearch = (query) => fetchMovies(query);

  // Mengambil data film saat komponen pertama kali di-render
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Header onSearch={handleSearch} />
      <div className="container">
        <h2 className="text-center my-4">Show your favorite movies</h2>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="row">
            {movies.map((movie) => (
              <Movie key={movie.imdbID} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
