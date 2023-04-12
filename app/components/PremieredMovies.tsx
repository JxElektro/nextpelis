import Link from "next/link";
import Image from "next/image";

export default function PremieredMovies({ title, id, backdrop_path, release_date, poster_path }: {
  title: string;
  id: number;
  backdrop_path: string | null;
  release_date: string;
  poster_path: string ;
}) {

  const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path || poster_path}`;

  return (
    <div className="flex items-center max-w-fit pb-2 md:pb-4 gap-2 md:gap-4 ">
      <div className="  overflow-hidden flex flex-col">
        <Link href={`/${id}`} title={`${title}`}>
          <Image src={imageUrl} alt={title} width={936} height={120} className="hover:opacity-75 rounded-b-full transition ease-in-out duration-150 md:w-80 md:h-48" />
        </Link>
        <div className="md:p-4 text-center align-middle">
          <h2 className="text-xl font-medium text-gray-900 ">{title}</h2>
          <p className="text-sm text-gray-600">{release_date}</p>
        </div>
      </div>
    </div>
  );

}