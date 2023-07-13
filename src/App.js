import "./App.css";
import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";

const url = "https://moviesdatabase.p.rapidapi.com/titles/search/akas/";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "96eeee70d8msh0eacc52ca5d036ap1265aejsnbec8937746ef",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

function App() {
  const [movie, setMovie] = useState();
  const searchMovies = async (title) => {
    try {
      const res = await fetch(url + title, options);
      const data = await res.json();
      console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchMovies("Breaking Bad");
  });

  return (
    <div className="app ">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          // onClick={() => searchMovies(searchTerm)}
        />
      </div>

      <div className="container">
        <div></div>
      </div>
    </div>
  );
}

export default App;
