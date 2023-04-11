import Link from "next/link";
import Image from "next/image";

export default function PremieredMovies({ title, id, backdrop_path, release_date }: {
  title: string;
  id: number;
  backdrop_path: string;
  release_date: string;
}) {
  if (!backdrop_path) {
    return null;
  }
  const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div className="flex flex-col items-center p-4 md:p-2 gap-4 md:gap-0">
      <div className="bg-gray rounded-lg shadow-lg overflow-hidden">
        <Link href={`/${id}`} title={`${title}`}>
          <Image src={imageUrl} alt={title} width={936} height={120} className="hover:opacity-75 transition ease-in-out duration-150 md:w-468 md:h-60" />
        </Link>
        <div className="p-4 md:p-2">
          <h2 className="text-lg font-medium text-gray-900">{title}</h2>
          <p className="text-sm font-medium text-gray-500">{release_date}</p>
        </div>
      </div>
    </div>
  );
}
