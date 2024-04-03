import React from 'react';

export default function MovieCard({ poster, title, releaseDate }) {
  return (
    <main>
      <h1>{title}</h1>
      <img src={poster} alt={title} width={300} height={500} />
      <p>Release Date: {releaseDate}</p>
    </main>
  );
}
