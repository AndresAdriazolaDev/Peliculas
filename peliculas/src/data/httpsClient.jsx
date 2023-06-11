const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2NkMzMxZjQzYzEwNWUwMWYyMTRmYzg1YTY2MGRhYSIsInN1YiI6IjY0ODU0Zjg3ZTI3MjYwMDBhZmMyY2VmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cF00csL2cD9_QLV3tkd_LWt11GFBoA13eA2AAySm8YE",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
