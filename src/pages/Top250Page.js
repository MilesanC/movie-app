import { useEffect, useState } from "react";

import TopMovieList from "../components/top250/TopMovieList";

const Top250Page = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://imdb-api.com/en/API/Top250Movies/k_1egcl85r")
      .then((respons) => respons.json())
      .then((data) => {
        setTopMovies(data.items);
        setError(data.errorMessage);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>IMDb Top 250 Movies</h1>
      {loading && <h2>Loading...</h2>}
      {!loading && (
        <section>
          <h2>{error}</h2>
        </section>
      )}
      {!loading && <TopMovieList topMovies={topMovies} />}
    </div>
  );
};

export default Top250Page;
