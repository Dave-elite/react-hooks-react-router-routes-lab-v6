import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies data here and update the state
    fetch('http://localhost:4000/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {/* Render MovieCard components for each movie */}
        {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} id={movie.id} />
        ))}
      </main>
    </>
  );
}

export default Home;
