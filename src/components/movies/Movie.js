import { Link } from "react-router-dom";
import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <div className={classes.container}>
      <Link to={`/movies/${props.id}`} className={classes.movie}>
        <div>
          <img src={props.image} alt={props.title} className={classes.poster} />
          <div className={classes.info}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
