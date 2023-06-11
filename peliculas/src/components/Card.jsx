import "./Card.css"
export function Card({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300/" + movie.poster_path;
  return (
    <li className="card">
      <img className="movieImage" width={230} height={345} src={imageUrl} alt={movie.title} />
      <div>{movie.title}</div>
    </li>
  );
}
