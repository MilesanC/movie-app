import { useEffect, useState } from "react";

import Movie from "../components/movies/Movie";
import SearchForm from "../components/movies/SearchForm";
import "../index.css";

const MoviesPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState("");
  const [showMovie, setShowMovie] = useState(true);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("inception");

  const searchMovieHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      fetch(`https://imdb-api.com/en/API/SearchMovie/k_1egcl85r/${inputValue}`)
        .then((respons) => respons.json())
        .then((data) => {
          console.log(data);
          setMovieData(data.results);
          setError(data.errorMessage);
          if (data.results) {
            setShowMovie(true);
          } else {
            setShowMovie(false);
          }
          setLoading(false);
        });
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [inputValue]);

  console.log(movieData);

  return (
    <div>
      <SearchForm onChange={searchMovieHandler} value={inputValue} />
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <section>
          <h2>{error}</h2>
        </section>
      )}
      {showMovie && (
        <section className="container-movie">
          {movieData.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              image={movie.image}
              title={movie.title}
              description={movie.description}
            />
          ))}
        </section>
      )}
    </div>
  );
};
// };

export default MoviesPage;
