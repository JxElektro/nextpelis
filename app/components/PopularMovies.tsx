'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";

const PopularMovies = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_TOKEN = "c2d1eba2da68e492d514141b781c25cf";

  const fetchPopularMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_TOKEN}&language=en-US&page=${page}`
    );
    const data = await res.json();
    const results = Array.isArray(data.results) ? data.results : [];


    setMovies((prevMovies) => {
      const uniqueMovies: { [key: number]: any } = {};
      [...prevMovies, ...results].forEach((movie) => {
        if (!uniqueMovies.hasOwnProperty(movie.id)) {
          uniqueMovies[movie.id] = movie;
        }
      });
      return Object.values(uniqueMovies);
    });

    setTotalPages(data.total_pages);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="flex flex-wrap justify-center w-full">
    <InfiniteScroll
      dataLength={movies.length}
      next={handleLoadMore}
      hasMore={page < totalPages}
      loader={<h4>Loading...</h4>}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {movies.map(({ id, title, poster_path, release_date }) => {
        if (!poster_path) {
          return null;
        }

        const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

        return (
          <div key={id} className="bg-gray rounded-lg shadow-lg overflow-hidden">
            <Link href={`/${id}`} title={`${title}`}>
              <Image
                src={imageUrl}
                alt={title}
                width={300}
                height={450}
                className="hover:opacity-75 transition ease-in-out duration-150"
              />
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-medium text-gray-900">{title}</h2>
              <p className="text-sm font-medium text-gray-500">{release_date}</p>
            </div>
          </div>
        );
      })}
    </InfiniteScroll>
    </div>
  );
};

export default PopularMovies;
