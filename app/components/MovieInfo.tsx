


export default function MovieInfo ({ title, overview, genres, releaseDate }: {
  title: string; 
  overview: string;
  genres: { id: number; name: string }[];
  releaseDate: string;
}) {

  return (
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-xl font-bold mb-2">Overview:</h2>
      <p>{overview}</p>
      <h2 className="text-xl font-bold mt-4 mb-2">Genres:</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mt-4 mb-2">Release Date:</h2>
      <p>{releaseDate}</p>
    </div>
  );
};


