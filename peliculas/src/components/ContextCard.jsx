import { useEffect, useState } from "react";
import { get } from "../data/httpsClient";
import { Card } from "./Card";
import "./ContextCard.css"

export function ContextCard() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      console.log(data);
    });
  }, []);
  return (
    <ul className="container">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
