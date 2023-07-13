import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie">
      <div>
        <p>{movie.releaseYear.year}</p>
      </div>
      <div>
        <img
          src={
            movie.primaryImage.url !== "N/A"
              ? movie.primaryImage.url
              : "https://via.placeholder.com/400"
          }
          alt={movie.titleText.text}
        />
      </div>
      <div>
        <span>{movie.titleType.text}</span>
        <h3>{movie.titleText.text}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
