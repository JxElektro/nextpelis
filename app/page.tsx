import PopularMovies from "./components/PopularMovies";
import PremieredMovies from "./components/PremieredMovies";

export default async function Home() {
  const dataPopular = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_TOKEN}&language=en-US&page=1`
  );
  const dataPremiered = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_TOKEN}&language=en-US&page=1`
  );

  const resPremiered = await dataPremiered.json();
  const resPopular = await dataPopular.json();

  return (
    <main className="flex flex-col items-center h-screen  overflow-x-hidden">
       <h1 className="text-2xl font-bold text-gray-900">Premiered Movies</h1>
      <div className="m-4">
  
       
        <div className="flex flex-nowrap gap-4 overflow-x-auto max-h-screen overflow-y-auto">
          {resPremiered.results.map((premiered: { id: number; title: string; backdrop_path: string; release_date: string }) => (
            <div key={premiered.id} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 flex-shrink-0">
              <PremieredMovies
                title={premiered.title}
                id={premiered.id}
                backdrop_path={premiered.backdrop_path}
                release_date={premiered.release_date}
              />
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gray-900">Popular Movies</h1>
      <div className="flex flex-wrap justify-center w-full">
        {resPopular.results.map((popular: { id: number; title: string; poster_path: string; release_date: string }) => (
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
