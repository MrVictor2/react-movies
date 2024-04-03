import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/Moviecard';
import { movies } from '../../data'; // Import the movie data

export default function MovieListPage() {
  return (
    <main>
      <h1>Movie List</h1>
      {/* Map through the list of movies and render a Link to MovieDetailPage for each */}
      {movies.map((movie, index) => (
        <Link key={index} to={`/movies/${movie.title}`}>
          <MovieCard
            poster={movie.posterPath}
            title={movie.title}
            releaseDate={movie.releaseDate}
          />
        </Link>
      ))}
    </main>
  );
}
