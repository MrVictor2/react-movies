// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/movies">Movies</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actors</Link>
    </nav>
  );
}
