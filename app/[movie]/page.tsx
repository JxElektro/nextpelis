import Image from "next/image";
import BannerDetail from "../components/BannerDetails";
import CastDetails from "../components/CastDetails";
import MovieInfo from "../components/MovieInfo";

export default async function MovieDetail({ params }: {
  params: {
    movie: string;
  };
}) {
  const { movie } = params;
  const imagePath = `https://image.tmdb.org/t/p/original`;
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_TOKEN}&language=en-US`);
  const res = await data.json();

  /*BannerSetting */
  const bannerImage = res.backdrop_path;

  return (
    <main>
      <BannerDetail banner={bannerImage} title={res.title} />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image src={`${imagePath}${res.poster_path}`} alt={res.title} width={300} height={400} />
        </div>
        <MovieInfo title={res.title} overview={res.overview} genres={res.genres} releaseDate={res.release_date} />
      </div>
      <CastDetails id={movie} />
    </main>
  );
}
