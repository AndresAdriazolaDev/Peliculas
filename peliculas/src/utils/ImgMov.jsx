import placeholder from "../assets/placeholder.png"
export function getImage(path, width) {
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
  }