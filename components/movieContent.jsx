import React from "react";
import MovieBanner from "./movieBanner";
import Genres from "./Genres";
import Search from "./Search";
import UserStatus from "./UserStatus";
import { useRouter } from "next/router";
const filterDepartment = (job, pageDetails) => {
  let department = pageDetails.credits.crew.filter((item) => {
    if (item.department === job) return item;
  });
  department = department.map((item) => item.name);
  return department.join(", ");
};

const getStars = (pageDetails) => {
  let stars = pageDetails.credits.cast.map((item) => item.name).join(", ");
  return stars;
};

export default function MovieContent(props) {
  const pageDetails = props.pageDetails;
  const writers = filterDepartment("Writing", pageDetails);
  // const producers = filterDepartment("Production", pageDetails);
  const stars = getStars(pageDetails);
  const director = filterDepartment("Directing", pageDetails);

  const topCasts = pageDetails.credits.cast;

  let credits = [
    {
      content: director,
      name: "director",
    },
    {
      content: writers,
      name: "writers",
    },
    {
      content: stars,
      name: "stars",
    },
  ];
  credits = credits.filter((item, id) => {
    if (item.content) {
      return item;
    }
  });
  const { pathname } = useRouter();
  const route = pathname.split("/")[1];
  return (
    <div className="__mainContainer__   flex flex-col w-[100vw]">
      <div className="__TopBar__ flex  p-5 items-center justify-around">
        <Search />
        <UserStatus />
      </div>
      <div className="_ContentContainer__ flex flex-col">
        <div className="__MiddleContent__ w-full text-white">
          <MovieBanner
            imageUrl={pageDetails.backdrop_path}
            poster={pageDetails.poster_path}
          />
          <div className="__TitleContent__  flex  flex-col md:flex-row">
            <div className=" text-center lg:w-fit   items px-5 py-2 md:text-xl prose text-gray-300">
              {pageDetails.original_title
                ? pageDetails.original_title
                : pageDetails.name}
              •{" "}
              {pageDetails.release_dates?.results?.map((item, id) => {
                // console.log(item);
                if (item.iso_3166_1 === "US") {
                  return item.release_dates[0]?.certification
                    ? item.release_dates[0]?.certification
                    : "PG-13";
                  // : "pg-nothing";
                }
              })}
              {pageDetails.runtime ? `• ${pageDetails.runtime}m` : ""}
            </div>
            <div className="flex text-xs  space-x-2 items-center justify-center">
              {pageDetails.genres.map((item, id) => {
                return (
                  <div
                    key={id}
                    className="flex p-2 mda:h-4 mt-1 text-[#e8e8e8a4] border-[#E8E8E859] border rounded-3xl text-xs  md:text-sm"
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>

            <div className="flex  mt-5 md:mt-0 items-center space-x-2 text-xs md:w-60 justify-center md:justify-end  ">
              <img className="w-6 h-6" src="/image/Heart.png" alt="" />
              <img className="w-6 h-6" src="/image/Bookmark.png" alt="" />
              <img className="w-5 h-5" src="/image/Star.png" alt="" />
              <div className="text-lg text-[#E8E8E8] divide-y-4">
                {parseFloat(pageDetails.vote_average).toFixed(2)}
              </div>
              <span className="text-xs text-[#666666]">
                {parseFloat(pageDetails.popularity / 1000).toFixed(2)}k
              </span>
            </div>
          </div>

          <div className="__MetaMain__  flex text-sm lg:text-base flex-col md:flex-row">
            <div className="__Description&Cast__ md:w-3/4 flex-[2] mt-2 md:mt-0 flex-col">
              <div className="px-5 __First__">
                <div className=" text-justify prose text-gray-300 ">
                  {pageDetails.overview}
                </div>
                <hr className="h-1 mt-2  border-[#E8E8E840]" />
                <div className="__CastDirector__ flex flex-col">
                  {credits.map((item, id) => {
                    return (
                      <>
                        <div key={id} className="flex py-2 space-x-2">
                          <div className="flex-1 capitalize">{item.name} :</div>
                          <p className="text-[#3DD2CC] flex-[7] xs:prose  ">
                            {item.content}
                          </p>
                        </div>
                        <hr className="h-1 mt-2  border-[#E8E8E840]" />
                      </>
                    );
                  })}
                </div>
                <div className="flex mt-2 space-x-5 items-center">
                  <button className="bg-[#3DD2CCB2] p-3 rounded-xl ">
                    Top rated movie #65
                  </button>
                  <div className="bg-[#121212CC] rounded-md shadow-xl py-1 px-3  items-center flex justify-between  flex-grow">
                    <span>Awards 9 nominations</span>
                    <img className="h-10 w-10" src="/image/Arrow.png" alt="" />
                  </div>
                </div>
                <div className=" py-1 px-3 mt-5 items-center flex justify-between  flex-grow">
                  <span>Awards 9 nominations</span>
                  <img className="h-10 w-10" src="/image/Arrow.png" alt="" />
                </div>
                <div className=" py-1 px-3 mt-5 items-center flex justify-between  flex-grow">
                  <span>Top Casts</span>
                  <img
                    className="h-10 w-10 -rotate-90"
                    src="/image/Arrow.png"
                    alt=""
                  />
                </div>
                <div className="__Casts__ flex justify-start items-stretch space-x-5 max-w-2xl   overflow-x-scroll">
                  {topCasts.map((item, id) => {
                    return (
                      <div
                        className="Cast# group min-h-max flex-1 w-50 h-50 items-start  py-3 px-3 flex flex-col  justify-start"
                        key={id}
                      >
                        <div className="rounded-ful group-hover:ring w-32 h-32 rounded-full overflow-clip ">
                          <img
                            className="
                            
                             object-fit
                            rounded-full"
                            src={`https://image.tmdb.org/t/p/w300${item.profile_path}`}
                            alt=""
                          />
                        </div>
                        <div className="px-3">
                          <div className="text-[#E8E8E8] ">
                            <span className="text-sm font-medium leading-tight mb-2">
                              T{item.name}
                            </span>{" "}
                            <br />
                            <span className="text-xs text-orange-500">
                              {item.character}
                            </span>
                            {item.character.split("/")[-1]}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="__Second__Recom  ">
                <Genres path={route} data={pageDetails.similar?.results} />
              </div>
            </div>
            <div className="__Recommendations__ flex-1 mt-5 md:mt-0  md:w-1/4 overflow-clip flex flex-col px-5  items-">
              <button className="bg-[#3DD2CCB2]  rounded-xl  items-center justify-center py-2 px-3 flex space-x-2">
                <img src="/image/TwoTickets.png" alt="" />
                <span className="text-sm sm:text-xs">See Showtimes</span>
              </button>
              <button className="text-sm flex space-x-2 items-center justify-center sm:text-xs bg-[#121212CC]  rounded-xl py-2 px-3 mt-2">
                <img src="/image/List.png" alt="" />
                <span className="text-sm sm:text-xs">More Watch Options</span>
              </button>
              <div className="__Recommendations__ mt-5 relative">
                <img className="" src="/image/Recom.png" alt="" />
                <button className="p-3 backdrop-blur-sm absolute bottom-0 w-full flex items-center justify-around">
                  <img src="/image/List.png" alt="" />
                  <span className="text-[15.1px]">
                    The Best Movies and Shows in September
                  </span>
                </button>
              </div>
              <div className="__Blogs__ flex flex-row justify-center mt-5">
                <div className="border border-[#E8E8E84D] px-3 py-1 rounded-xl   w-full flex flex-col">
                  <div className="flex space-x-2 py-2">
                    <div className="text-start text-xs text-[#E8E8E8]">
                      The Billion-Dollar Film Club: 50 Movies to Reach $1
                      Billion Worldwide
                    </div>
                    <img className="h-20 w-20" src="/image/Joker.png" alt="" />
                  </div>
                  <span className="text-[12px] text-[#E8E8E899]">
                    updated 1 week ago • 50 images
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
