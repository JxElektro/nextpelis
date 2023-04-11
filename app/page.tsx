import PopularMovies from "./components/PopularMovies";
import PremieredMovies from "./components/PremieredMovies";

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_TOKEN}&language=en-US&page=1`);

  const res = await data.json();
  return (
    //debe ser una columna este main
    <main className="
    flex
    flex-col
    items-center">
      <h1 className="text-center py-20">
        Next Peliddds
        <span className="
        text-4xl
        ">🎬</span>
        <PremieredMovies />
      </h1>
      <div className="flex flex-wrap justify-center w-full">
        {res.results.map((popular: { id: number ; title: string; poster_path: string; release_date: string }) => (
          <PopularMovies
            key={popular.id}
            title={popular.title}
            id={popular.id}
            poster_path={popular.poster_path}
            release_date={popular.release_date}
          />
        ))}
      </div>
    </main>
  );
}
