import React from 'react';

const ActorCard = ({ actorName }) => {
  // Generate a random image from Lorem Picsum
  const imageUrl = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;

  return (
    <div className="actor-card">
      <img src={imageUrl} alt={actorName} />
      <h2>{actorName}</h2>
    </div>
  );
};

export default ActorCard;
