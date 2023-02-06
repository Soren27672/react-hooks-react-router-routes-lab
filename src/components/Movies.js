import React from "react";
import { movies } from "../data";
import MovieDiv from "./MovieDiv"

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map(movie => {
      return (
        <MovieDiv movie={movie} key={movie.title}/>
      )
    })}
  </div>;
}

export default Movies;
