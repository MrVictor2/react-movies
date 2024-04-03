import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';
import { movies } from '../../data';

export default function App() {
  const [user, setUser] = useState();

  return (
    <main className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginPage onLogin={setUser} />} />
          <Route path="/movies" element={<MoviesListPage />} />
          <Route path="/movies/:movieName" element={<MovieDetailPage />} />
          <Route path="/actors" element={<ActorListPage movies={movies} />} />
        </Routes>
      </Router>
    </main>
  );
}
