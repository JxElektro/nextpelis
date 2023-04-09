import Image from "next/image";

interface MovieDetailProps {
  params: {
    movie: string;
  };
}

export default async function MovieDetail({ params }: MovieDetailProps) {
  const { movie } = params;
  const imagePath = `https://image.tmdb.org/t/p/original`;
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_TOKEN}&language=en-US`);

  const res = await data.json();

  return (
    <main>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl">{res.title}</h1>
        <Image src={`${imagePath}${res.poster_path}`} alt={res.title} width={150} height={200} />
        <p>{res.overview}</p>
      </div>
    </main>
  );
}
