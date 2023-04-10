import Link from "next/link";
import Image from "next/image";



export default function Movie({ title, id, poster_path, release_date }:{
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
    <div className="flex flex-col items-center">
      <Link href={`/${id}`} title={`${title}`}>
        <Image src={imageUrl} alt={title} width={150} height={200} />
      </Link>
      <h2 >{title}</h2>
      <p>{release_date}</p>
    </div>
  );
}
