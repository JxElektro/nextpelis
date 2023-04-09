import { Key } from "react";
import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_TOKEN}&language=en-US&page=1`);

  const res = await data.json();
  return (
    <main>
      <h1 className="text-center py-20">
        Next Pelis
        <span className="text-4xl">🎬</span>
      </h1>
      {res.results.map((popular: { id: number ; title: string; poster_path: string; release_date: string }) => (
        <Movie
          key={popular.id}
          title={popular.title}
          id={popular.id}
          poster_path={popular.poster_path}
          release_date={popular.release_date}
        />
      ))}
    </main>
  );
}
