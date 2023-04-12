import Image from "next/image";

interface CastMember {
  id: any;
  name: string;
  profile_path: string;
  character: string;
}


/* este componente muestra los actores de la pelicula tomando la informacion desde las props*/
const CastDetails = ({ cast }: { cast: CastMember[] }) => {
  const imagePath = `https://image.tmdb.org/t/p/w500`;

  return (
    <div className="m-8">
      <h2 className="text-2xl font-semibold mt-6 mb-4">Cast Details</h2>
      <div className="flex flex-nowrap gap-4 overflow-x-auto">
        {cast.map((castMember) => {
          const imgSrc = castMember.profile_path ? `${imagePath}${castMember.profile_path}` : "https://via.placeholder.com/500x750";

          return (
            <div key={castMember.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex-shrink-0">
              <Image src={imgSrc} alt={castMember.name} className="w-full h-auto" width={500} height={750}  />
              <p className="font-semibold">{castMember.character}</p>
              <p>{castMember.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CastDetails;
