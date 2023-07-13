import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const url = "https://moviesdatabase.p.rapidapi.com/titles/search/akas/";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "96eeee70d8msh0eacc52ca5d036ap1265aejsnbec8937746ef",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    try {
      const res = await fetch(`${url}${title}`, options);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app ">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found.</h2>
        </div>
      )}
    </div>
  );
}

export default App;

// sea imam state movies, ovoj state ne se menuva, se tretura kako immutable poso e del od state, samo preku setter function setmovies. prvo loop preku movies.map da gi dobijam site filmovi, ondak mu dava prop movie na movie component instanca vo app.js, i go deconstruct vo movie component
