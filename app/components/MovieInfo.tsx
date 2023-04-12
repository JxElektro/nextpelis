
/* Esta informacion se renderiza tomando los datos de la pelicula seleccionada en la pagina principal */
export default function MovieInfo ({ title, overview, genres, releaseDate }: {
  title: string; 
  overview: string;
  genres: { id: number; name: string }[];
  releaseDate: string;
}) {

  return (
    <div className="  p-10 mr-7 bg-purple-100 text-gray-800 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-2 border-b-2 border-gray-300">Overview:</h2>
      <p className="mb-4">{overview}</p>
      <h2 className="text-2xl font-bold mb-2 border-b-2 border-gray-300">Genres:</h2>
      <ul className="list-none mb-4 space-y-1">
        {genres.map((genre) => (
          <li key={genre.id} className="before:content-['◆'] before:pr-2">{genre.name}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-2 border-b-2 border-gray-300">Release Date:</h2>
      <p>{releaseDate}</p>
    </div>
  );
};


