import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage'; // Make sure to import ErrorPage

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/directors',
    element: <Directors />
  },
  {
    path: '/actors',
    element: <Actors />
  },
  {
    path: '/movie/:id',
    element: <Movie />
  },
  {
    path: '*', // This will catch all undefined routes
    element: <ErrorPage />
  }
];

export default routes;
