import fetchMovies from "service/api-themoviedb";

function Movies() {
    console.log(fetchMovies())    
    
    return (
        <p>Movies</p>
    )
};

export default Movies;