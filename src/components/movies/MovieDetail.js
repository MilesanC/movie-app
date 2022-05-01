import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import classes from "./MovieDetail.module.css";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`https://imdb-api.com/en/API/Title/k_1egcl85r/${params.movieId}`)
      .then((respons) => respons.json())
      .then((data) => {
        console.log(data);
        setMovieDetail(data);
      });
  }, [params.movieId]);

  if (movieDetail.length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className={classes.container}>
        <img src={movieDetail.image} alt={movieDetail.title} />
        <div className={classes.info}>
          <div className={classes.head}>
            <div className={classes.title}>
              <h1>{movieDetail.title}</h1>
              <span>
                <p>{movieDetail.year}</p>
                <p>{movieDetail.contentRating}</p>
                <p>{movieDetail.runtimeStr}</p>
              </span>
            </div>
            <div>
              <h2>
                {movieDetail.imDbRating}/10
                <FontAwesomeIcon icon={faStar} className={classes.star} />
              </h2>
              <p>{movieDetail.imDbRatingVotes} votes</p>
            </div>
          </div>
          <p className={classes.plot}>{movieDetail.plot}</p>
        </div>
      </div>
    );
  }
};

export default MovieDetail;
