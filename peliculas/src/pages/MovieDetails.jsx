import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpsClient";
import { getImage } from "../utils/ImgMov";
import "../styles/MovieDetails.css"
export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGenres(data.genres[0]);
    });
  }, [movieId]);
  const imageUrl = getImage(movie.poster_path, 500);
  return (
    <div className="detailsContainer">
      <img className="col imageMovie" src={imageUrl} alt={movie.title} />
      <div className="col movieDetails">
        <p>
          <strong>Title: </strong> {movie.title}
        </p>
        <p>
          <strong>Genre: </strong> {genres.name}
        </p>
        <p>
          <strong>Description: </strong> {movie.overview}
        </p>
        <p>
          <strong>Release date: </strong> {movie.release_date}
        </p>
      </div>
    </div>
  );
}
