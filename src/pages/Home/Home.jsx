import { useEffect, useState } from "react";
import fetchMovies from "service/api-themoviedb";
import TrendingMovies from "components/TrendingMovies/TrendingMovies";

const request = 'trending/all/day';

function Home() {
    const [trendingMovies, settrendingMovies] = useState([fetchMovies(request).results]);



    return (
        <>
        <h1>Trending today</h1>
        <TrendingMovies trendingMovies={trendingMovies}/>
        </>

    )
};

export default Home;