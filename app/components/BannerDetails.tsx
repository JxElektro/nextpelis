import Image from "next/image";

export default function BannerDetail({ banner, title }: { banner: string; title: string }) {
  const imagePath = `https://image.tmdb.org/t/p/original`;

  return (
    <main>
      <div className="relative w-full h-52 " >
        <Image
          className="w-full h-52"
          src={`${imagePath}${banner}`}
          alt={title}
          width={936}
          height={120}
          style={{ objectFit: "cover", objectPosition: "center 15%" }}
        />
        <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70">
          <h1 className="text-4xl text-center text-white py-2">{title}</h1>
        </div>
      </div>
    </main>
  );
}
