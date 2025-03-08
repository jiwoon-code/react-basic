import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, name, thumbnail }) {
  return (
    <div className={styles.movie}>
      <Link to={`/character/${id}`}>
        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={name}
          className={styles.movie__img}
        />
      </Link>
      <h2 className={styles.movie__title}>
        <Link to={`/character/${id}`}>{name}</Link>
      </h2>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Movie;
