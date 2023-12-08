import './App.css';
import { useEffect } from 'react';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';


const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";
const movie1 = {
  "Title": "The Amazing Spiderman 2 Webb Cut",
  "Year": "2021",
  "imdbID": "tt18351128",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
}
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title} `);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {

    searchMovies('SpiderMan')

  }, []);

  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input placeholder='Search for movie' value={"Superman"} onChange={() => { }} />
          <img src={SearchIcon}
            alt="search"
            onClick={() => { }}
          />
        </div>

        <div className="container">
          <MovieCard movie1={movie1} />

        </div>

      </div>

    </>
  );
}

export default App;
