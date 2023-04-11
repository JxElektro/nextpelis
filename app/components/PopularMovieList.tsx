// this componente PopolarMovieList will recibe a prop called popularMovies and will fetch a data from the API and will render a list of movies
/* const dataPopular = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_TOKEN}&language=en-US&page=1`
  ); PopularMovies es el componente padre

import { useEffect, useState } from "react";

export default function PopularMovieList ({ popularMovies }) 
{
  const [popular, setPopular] = useState([])

  useEffect(() => {
    const fetchPopular = async () => {
      const dataPopular = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_TOKEN}&language=en-US&page=1`
      );
      const resPopular = await dataPopular.json();
      setPopular(resPopular.results)
    }
    fetchPopular()
  }, [])

  return (
    <div className="flex flex-wrap justify-center w-full">
      {popular.map((popular: { id: number; title: string; poster_path: string; release_date: string }) => (
        <PopularMovies
          key={popular.id}
          title={popular.title}
          id={popular.id}
          poster_path={popular.poster_path}
          release_date={popular.release_date}
        />
      ))}
      */
