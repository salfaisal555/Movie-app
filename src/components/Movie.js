// src/components/Movie.js
import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="card-img-top"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <div className="card-body bg-danger text-white text-center">
          <h5>{movie.Title}</h5>
        </div>
      </div>
    </div>
  );
};

export default Movie;
