import React from "react";

function DirectorDiv({ director }) {

    return(
        <div>
            <h3>{`Name: ${director.name}`}</h3>
            <p>Movies:</p>
            <ul>
                {director.movies.map(movie => {
                    return (
                        <li key={movie}>{movie}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DirectorDiv;