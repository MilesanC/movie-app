import TopMovie from "./TopMovie";

const TopMovieList = (props) => {
  return (
    <div>
      {props.topMovies.map((movie) => (
        <TopMovie
          key={movie.id}
          id={movie.id}
          rank={movie.rank}
          title={movie.fullTitle}
          image={movie.image}
          rating={movie.imDbRating}
        />
      ))}
    </div>
  );
};

export default TopMovieList;
