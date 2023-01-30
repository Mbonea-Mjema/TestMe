import React from "react";

export default function Banner() {
  return (
    <div className="relative  container p-2 flex">
      <img className="aspect-[917/308]" src="/image/BannerImage.png" alt="" />
      <div className="absolute flex bottom-5 right-[10vw] text-sm space-x-2 ">
        <button className="flex items-center text-white  bg-[#e8e8e823] py-2 px-3 backdrop-blur-sm rounded-lg">
          <img
            className="w-5 h-5 drop-shadow-lg"
            src="/image/Play.png"
            alt=""
          />
          <span className="text-sm">Play</span>
        </button>
        <button className="flex items-center space-x-2  text-white bg-[#e8e8e823] py-2 px-3 backdrop-blur-lg rounded-lg">
          {" "}
          <img className="w-5 h-5" src="/image/Info.png" alt="" />
          <span className="text-xs">More Info</span>
        </button>
      </div>
    </div>
  );
}
