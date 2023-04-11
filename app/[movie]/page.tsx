import Image from "next/image";
import BannerDetail from "../components/BannerDetails";
import CastDetails from "../components/CastDetails";
import MovieInfo from "../components/MovieInfo";

export default async function MovieDetail({ params : { movie } }: { params: { movie: string }


}) {
  const imagePath = `https://image.tmdb.org/t/p/original`;
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_TOKEN}&language=en-US`);
  const res = await data.json();

  const creditsData = await fetch(`https://api.themoviedb.org/3/movie/${movie}/credits?api_key=${process.env.API_TOKEN}&language=en-US`);
  const credits = await creditsData.json();
  const cast = credits.cast || [];


return (
  <main>
    <BannerDetail banner={res.backdrop_path} title={res.title} />
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/3 flex justify-center items-center p-4">
        <Image src={`${imagePath}${res.poster_path}`} alt={res.title} width={300} height={400} className="rounded-lg shadow-md" />
      </div>
      <div className="w-full md:w-2/3 p-4">
        <MovieInfo title={res.title} overview={res.overview} genres={res.genres} releaseDate={res.release_date} />
      </div>
    </div>
    <CastDetails cast={cast} />
  </main>
);

}
