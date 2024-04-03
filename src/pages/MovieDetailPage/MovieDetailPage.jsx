import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { movies } from '../../data'; // Import the movie data

export default function MovieDetailPage() {
  const { movieName } = useParams();

  // Find the movie object based on the movieName parameter
  const movie = movies.find(movie => movie.title === movieName);

  // If the movie is not found, display a message
  if (!movie) {
    return (
      <main>
        <h1>Movie Detail - {movieName}</h1>
        <p>Movie not found</p>
      </main>
    );
  }

  // Extract unique actors from the cast of the movie
  const uniqueActors = [...new Set(movie.cast)];

  // If the movie is found, display its details
  return (
    <main>
      <h1>Movie Detail - {movie.title}</h1>
      <div>
        <img src={movie.posterPath} alt={movie.title} />
      </div>
      <div>Release Date: {movie.releaseDate}</div>
      <div>
        Cast: {uniqueActors.map((actor, index) => (
          <React.Fragment key={index}>
            <Link to={`/actors/${actor}`}>{actor}</Link>
            {index !== uniqueActors.length - 1 && ', '}
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}
