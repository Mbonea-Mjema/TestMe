import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import Genres from "./Genres";
import Search from "./Search";
import UserStatus from "./UserStatus";

export default function MainContent({ mainPage, ...props }) {
  console.log(mainPage);
  return (
    <div className="__mainContainer__   flex flex-col w-[100vw]">
      <div className="__TopBar__ flex  p-5 items-center justify-around">
        <Search />
        <UserStatus />
      </div>
      <div className="_ContentContainer__ flex">
        <div className="__MiddleContent__ w-full flex flex-col">
          <Banner />
          <Genres data={mainPage[0].results} genre={"Trending"} />
          <Genres
            data={mainPage[1].results}
            path={"tv"}
            genre={"Top Rated Tv"}
          />
        </div>

        <div className="__sideContent__ w-2/5">
          <Categories />
        </div>
      </div>
    </div>
  );
}
