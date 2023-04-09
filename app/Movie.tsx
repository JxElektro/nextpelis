import Link from "next/link";
import Image from "next/image";

interface MovieProps {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;
}

export default function Movie({ title, id, poster_path, release_date }: MovieProps) {
  const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <div className="flex flex-col items-center">
      <Link href={`/${id}`}>
        <Image src={imageUrl} alt={title} width={150} height={200} />
      </Link>
      <h2>{title}</h2>
      <p>{release_date}</p>
    </div>
  );
}
