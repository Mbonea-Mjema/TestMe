import Image from "next/image";
import React from "react";

export default function MovieBanner(props) {
  // const aspectRatio = 150 / 84;
  // const width = 150;
  console.log(props.imageUrl, props.banner);
  return (
    <div className="relative   container bg-contain p-2 flex justify-start">
      <img
        // quality={100}
        // width={width}
        // height={width / aspectRatio}
        className="rounded-2xl  object-cover object-top  aspect-[917/308]  md:w-10/12"
        src={`https://image.tmdb.org/t/p/original${
          props.imageUrl ? props.imageUrl : props.poster
        }`}
        alt=""
      />
    </div>
  );
}
