import React from "react";
const movieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div>
                <span>
                    {movie.Type}
                    <h2>{movie.Title}</h2>
                </span>
            </div>
        </div>
    )
}
export default movieCard
