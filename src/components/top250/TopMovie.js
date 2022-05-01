import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import classes from "./TopMovie.module.css";

const TopMovie = (props) => {
  return (
    <Link to={`/movies/${props.id}`} className={classes.movie}>
        <img src={props.image} alt={props.title} className={classes.image} />
        <div className={classes.info}>
          <h2 className={classes.title}>
            {props.rank}. {props.title}
          </h2>
          <h2 className={classes.rating}>
            {props.rating}{" "}
            <FontAwesomeIcon icon={faStar} className={classes.star} />
          </h2>
        </div>
    </Link>
  );
};

export default TopMovie;
