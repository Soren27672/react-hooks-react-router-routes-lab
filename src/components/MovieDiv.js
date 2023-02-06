import React from "react";

function MovieDiv({ movie }) {

    return (
        <div>
            <h3>{`Name: ${movie.title}`}</h3>
            <p>{`Time: ${movie.time}`}</p>
            <ul>
                {movie.genres.map(genre => {
                    return <li key={genre}>{genre}</li>
                })}
            </ul>
        </div>
    )
}

export default MovieDiv