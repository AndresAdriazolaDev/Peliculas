import "../styles/Card.css";
import { Link } from "react-router-dom";
export function Card({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300/" + movie.poster_path;
  return (
    <li className="card">
      <Link to={"/movie/" + movie.id}>
        <img
          className="movieImage"
          width={230}
          height={345}
          src={imageUrl}
          alt={movie.title}
        />
      </Link>
      <div className="titleName">{movie.title}</div>
    </li>
  );
}
