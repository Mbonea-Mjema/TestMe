import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Genres(prop) {
  const cardHeight = 100;
  const data = prop.data;
  const path = prop.path;
  const genre = prop.genre || "Similar";

  return (
    <div className="__GenreContainer__  flex flex-col p-5   h-full ">
      <h1 className="text-[#E8E8E8] my-5 text-lg"> {genre}</h1>
      <div className="flex  items-stretch  justify-items-stretch overflow-x-scroll space-x-5 max-w-2xl    ">
        {data?.map((item, id) => {
          return (
            <Link
              key={(id + 2) * 2}
              href={`/${path || item.media_type || "movie"}/${item.id}`}
            >
              <div key={id} className="flex  flex-col space-y-2   ">
                <div className="flex   overflow-clip  h-full ">
                  <div className="relative h-full flex-1  ">
                    <Image
                      className=" max-w-2xl  rounded-2xl p-1   object-cover"
                      height={cardHeight}
                      width={cardHeight / 0.66}
                      src={`https://image.tmdb.org/t/p/w500${
                        item.poster_path || item.backdrop_path
                      }`}
                      alt=""
                    />
                    <div className="absolute  w-14 flex backdrop-blur-sm top-0 right-0 rounded-bl-2xl rounded-tr-2xl bg-[#c5c4c463] justify-center items-center space-x-1">
                      <img src="/image/Star.png" alt="" className="w-2 h-2" />
                      <span className="text-sm text-white">
                        {parseFloat(item.vote_average).toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
