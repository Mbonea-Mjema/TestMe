import Link from "next/link";
import React, { useEffect } from "react";
import { multiSearch } from "../lib/ApiCalls";

export default function Search() {
  const [timer, setTimer] = React.useState(null);
  const [_results, setResults] = React.useState(null);
  const [_hide, setHidden] = React.useState(true);
  const handle_typing = async (event) => {
    console.log(event);
    let query = event.target.value.trim();
    if (query.length < 3) {
      setResults(null);
      return [];
    }

    const newTimer = setTimeout(async function () {
      let data = await multiSearch(query);

      setResults(
        data.results.filter((item) => {
          if (item.media_type === "tv" || item.media_type === "movie") {
            return item;
          }
        })
      );

      // if (data.results != [])
    }, 300);
    setTimer(newTimer);
    setHidden(false);
  };
  const handleBlur = (e) => {
    console.log(e);
    setHidden(true);
  };
  return (
    <div className="flex flex-col relative">
      <div className="__searchBar__ flex items-center min-w-[60vw] p-2 shadow-md rounded-3xl bg-[#212121]">
        <div className="p-2">
          <img className="w-5 h-5 " src="/image/Search.png" alt="" />
        </div>
        <input
          className=" outline-none bg-transparent w-full bg-black text-[#666666]"
          type="text"
          name="search"
          autoComplete="off"
          onInput={handle_typing}
          id="search"
          placeholder="Search for movies, Tv shows..."
        />
      </div>
      <div
        // onBlur={handleBlur}
        className={`absolute top-12 z-50 flex flex-col h-[40vh] rounded-b-2xl  mt-2 divide-y divide-gray-500 p-1 w-[90vw]  md:w-full  overflow-y-scroll ${
          // document.getElementById("search")?.value == "" ||
          _hide || _results?.length === 0 || _results === null ? "hidden" : ""
        }`}
      >
        {_results?.map((item, id) => {
          if (id === 0) {
            return (
              <Link
                key={id}
                href={`/${item.media_type}/${item.id}`}
                onClick={() => {
                  setHidden(true);
                }}
              >
                <div className="hover:bg-[#666666] shadow drop-shadow-xl hover:text-white rounded-t-2xl space-x-2 bg-[#ffffff] p-2 flex">
                  <img
                    className="h-14 rounded-xl"
                    src={`https://image.tmdb.org/t/p/w500${
                      item.backdrop_path || item.poster_path
                    }`}
                    alt=""
                  />
                  <div className="flex flex-col text-sm">
                    <span>
                      {item.title || item.original_title || item.name}
                    </span>
                    <img
                      src={`/image/${
                        item.media_type === "movie" ? "Projector" : "Tv"
                      }.png`}
                      alt=""
                      className="h-5 w-5 stroke-white"
                    />
                  </div>
                </div>
              </Link>
            );
          }
          if (id === _results.length - 1) {
            return (
              <Link
                key={id}
                href={`/${item.media_type}/${item.id}`}
                onClick={() => {
                  setHidden(true);
                }}
              >
                <div className="hover:bg-[#666666] hover:text-white rounded-b-2xl space-x-2 bg-[#ffffff] p-2 flex">
                  <img
                    className="h-14 rounded-xl"
                    src={`https://image.tmdb.org/t/p/w500${
                      item.backdrop_path || item.poster_path
                    }`}
                    alt=""
                  />
                  <div className="flex flex-col text-sm">
                    <span>
                      {item.title === undefined ? item.name : item.title}
                    </span>
                    <img
                      src={`/image/${
                        item.media_type === "movie" ? "Projector" : "Tv"
                      }.png`}
                      alt=""
                      className="h-5 w-5 stroke-white"
                    />
                  </div>
                </div>
              </Link>
            );
          } else {
            return (
              <Link
                onClick={() => {
                  setHidden(true);
                }}
                key={id}
                href={`/${item.media_type}/${item.id}`}
              >
                <div className=" hover:bg-[#666666] hover:text-white bg-[#ffffff] space-x-2 p-2 flex">
                  <img
                    className="h-14 rounded-xl"
                    src={`https://image.tmdb.org/t/p/w500${
                      item.backdrop_path || item.poster_path
                    }`}
                    alt=""
                  />
                  <div className="flex flex-col text-sm">
                    <span>{item.title}</span>
                    <span>
                      <img
                        src={`/image/${
                          item.media_type === "movie" ? "Projector" : "Tv"
                        }.png`}
                        alt=""
                        className="h-5 w-5 stroke-white"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
