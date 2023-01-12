import React, { useCallback, useEffect, useState } from "react";
import { Movie } from "./Movie";
// import { Movie } from "./Movie";
export const Appp = () => {
  const [movies, setMovies] = useState([]);
  const [Loading, setloading] = useState(false);
  const [iserror, seterror] = useState(null);
  const [Cancel, setcancel] = useState(false);

  const Handlecancel = () => {
    setcancel(!Loading);
  };

  async function FetchMovieHandler() {
    setloading(true);
    seterror(null);

    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong ....Retrying");
      }
      const data = await response.json();
      const transformmovie = data.results.map((moviedata) => {
        return {
          id: moviedata.episode_id,
          title: moviedata.title,
          director: moviedata.director,
        };
      });
      setMovies(data.results);
    } catch (error) {
      seterror(error.message);
    }
    setloading(false);
  }

  // useEffect(()=>{
  //   FetchMovieHandler();
  // },[movies])

  // console.log(movies)

  const result = movies.map((item) => {
    return (
      <li>
        <Movie
          id={item.id}
          title={item.title}
          opentext={item.opentext}
          director={item.director}
          
        />
      </li>
    );
  });
  return (
    <>
      <div>
        <button onClick={FetchMovieHandler}>FetchData</button>
        <button onClick={Handlecancel}>Cancel</button>
        {!Loading && movies.length > 0 && <Movie movie={movies} />}
        {!Loading && movies.length === 0 && !iserror && <p>Movie not found</p>}
        {Loading && <p>Loading....</p>}
        {!Loading && <p>{iserror}</p>}
        <div>{result}</div>
      </div>
    </>
  );
};
