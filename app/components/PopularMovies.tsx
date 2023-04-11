import Link from "next/link";
import Image from "next/image";

export default function PopularMovies({ title, id, poster_path, release_date }: {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;
}) {
  if (!poster_path) {
    return null;
  }

  const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <div className="flex flex-wrap justify-center items-center w-64 p-4">
      
      <div className="bg-gray rounded-lg shadow-lg overflow-hidden">
        <Link href={`/${id}`} title={`${title}`}>
          <Image src={imageUrl} alt={title} width={300} height={450} className="hover:opacity-75 transition ease-in-out duration-150" />
        </Link>
        <div className="p-4">
          <h2 className="text-lg font-medium text-gray-900">{title}</h2>
          <p className="text-sm font-medium text-gray-500">{release_date}</p>
        </div>
      </div>
    </div>
  );
}
