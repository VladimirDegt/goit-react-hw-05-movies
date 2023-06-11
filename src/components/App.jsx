import { Route, Routes } from "react-router-dom";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import Navbar from "./Navbar/Navbar";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

export const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:moviesId' element={<MovieDetails/>} />
        <Route path='/movies/:moviesId/cast' element={<Cast/>}/>
        <Route path='/movies/:moviesId/reviews' element={<Reviews/>}/>
        <Route path='*' element={<Home />} />
      </Routes>
    </>
  );
};
