import React from 'react';
import ActorCard from '../../components/ActorCard/ActorCard';

export default function ActorsListPage({ movies }) {
  // Create a set to store unique actors
  const uniqueActors = new Set();

  // Iterate through each movie to extract actors
  movies.forEach(movie => {
    movie.cast.forEach(actor => {
      uniqueActors.add(actor);
    });
  });

  return (
    <main>
      <h1>Actors List</h1>
      <div className="actors-container">
        {/* Render each actor as an ActorCard */}
        {[...uniqueActors].map((actor, index) => (
          <ActorCard key={index} actorName={actor} />
        ))}
      </div>
    </main>
  );
}
