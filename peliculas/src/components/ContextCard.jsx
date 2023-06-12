import { useEffect, useState } from "react";
import { get } from "../data/httpsClient";
import { Card } from "./Card";
import "../styles/ContextCard.css";
import "../styles/Footer.css";


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
          <footer className="footer">
      <h4>Dev .<span> - Andrés Adriazola</span></h4>
      <h5>Recent Movies</h5>
    </footer>
    </ul>
    
  );
}
