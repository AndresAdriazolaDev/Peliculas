import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";
export function Rutas() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
        </Routes>
    </Router>
  )
}
