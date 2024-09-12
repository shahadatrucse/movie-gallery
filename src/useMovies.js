import { useEffect, useState } from "react";
// Environment variables should start with REACT_APP_
const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
export function useMovies(query, handleCloseMovie) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  console.log("API_KEY: ", API_KEY);
  console.log("API_URL: ", API_URL);
  useEffect(
    function () {
      //   callback?.();
      const controller = new AbortController(); // native browser api
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(`${API_URL}/?apikey=${API_KEY}&s=${query}`, {
            signal: controller.signal,
          });

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err.message);
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
