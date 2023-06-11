import MovieDetails from 'pages/MovieDetails/MovieDetails';
import { Outlet } from 'react-router-dom';

export function LayoutTwo() {
  return (
    <>
      <MovieDetails />
      <Outlet />
    </>
  );
}
