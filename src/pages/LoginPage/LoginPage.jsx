// LoginPage.jsx
import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function LoginPage({ history }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/movies'); // Redirect to MoviesListPage after login
  };

  return (
    <main>
      <h1>Login</h1>
      <SignUpForm />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
