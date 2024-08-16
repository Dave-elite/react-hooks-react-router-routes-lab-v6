import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Movie() {
  const { id } = useParams(); // Extract the 'id' from URL parameters
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Movie not found');
        }
        return response.json();
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        // console.error('Error fetching movie:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movie) return <p>No movie data available</p>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index} style={{ marginRight: '5px' }}>
              {genre}
            </span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;