'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";




const PopularMovies = ({token} : {
  token: string;
}
) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  

  const fetchPopularMovies = async () => {
    const pageSize = 350;
    const pagesToFetch = Math.ceil(pageSize / 20);
    const fetchedMovies: any[] = [];

    for (let i = 0; i < pagesToFetch; i++) {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${token}&language=en-US&page=${page + i}`
      );
      const data = await res.json();
      const results = Array.isArray(data.results) ? data.results : [];
      fetchedMovies.push(...results);

      setTotalPages(data.total_pages);
    }

    setMovies((prevMovies) => {
      const uniqueMovies: { [key: number]: any } = {};
      [...prevMovies, ...fetchedMovies].forEach((movie) => {
        if (!uniqueMovies.hasOwnProperty(movie.id)) {
          uniqueMovies[movie.id] = movie;
        }
      });
      return Object.values(uniqueMovies);
    });

    setPage((prevPage) => prevPage + pagesToFetch);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const handleLoadMore = () => {
    if (page < totalPages) {
      fetchPopularMovies();
    }
  };



  return (
    <div className="flex flex-wrap justify-center w-full  pl-4 pr-4" >
      <InfiniteScroll
        dataLength={movies.length}
        next={handleLoadMore}
        hasMore={page < totalPages}
        loader={<h4>Loading...</h4>}
        className="grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 "
      >
        {movies.map(({ id, title, poster_path, release_date, backdrop_path }) => {
          if (!poster_path) {
            return null;
          }

          const imageUrl = `https://image.tmdb.org/t/p/original${poster_path || backdrop_path}`;

          return (
            <div key={id} className="bg-gray rounded-lg pr-4 pl-4 pt-4 shadow-lg overflow-hidden ">
              <Link href={`/${id}`} title={`${title}`}>
                <Image
                  src={imageUrl}
                  alt={title}
                  width={265}
                  height={250}
                  className="hover:opacity-75 transition ease-in-out duration-150"
                />
              </Link>
              <div className="p-4">
                <h2 className="text-lg text-center font-medium text-gray-900">{title}</h2>
              </div>
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default PopularMovies;
