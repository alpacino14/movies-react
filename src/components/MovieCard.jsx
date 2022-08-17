import styles from "../components/MovieCard.module.css";
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

const MovieCard = ({ movie }) => {
  const imageUrl = getMovieImg(movie.poster_path, 300);
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={245}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div> {movie.title} </div>
      </Link>
    </li>
  );
};
export default MovieCard;
