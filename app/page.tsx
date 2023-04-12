import PopularMovies from "./components/PopularMovies";
import PremieredMovies from "./components/PremieredMovies";

export default async function Home() {
  const dataPremiered = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_TOKEN}&language=en-US&page=1`
  );

  const resPremiered = await dataPremiered.json();

  return (
    <main className="flex flex-col items-center overflow-x-hidden  ">
      <div >
        <div className="flex flex-nowrap gap-4 overflow-x-scroll w-screen bg-purple-50">
          {resPremiered.results.map(
            (premiered: { id: number; title: string; backdrop_path: string; release_date: string; poster_path: string }) => (
              <div key={premiered.id} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 flex-shrink-0">
                <PremieredMovies
                  title={premiered.title}
                  id={premiered.id}
                  backdrop_path={premiered.backdrop_path}
                  release_date={premiered.release_date}
                  poster_path={premiered.poster_path}
                />
              </div>
            )
          )}
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center w-full bg-purple-50">
      <h1 className="text-2xl font-bold text-gray-900 ">Popular Movies</h1>
        <PopularMovies />
      </div>
    </main>
  );
}
