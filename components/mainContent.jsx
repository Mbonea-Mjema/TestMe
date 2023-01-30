import { useRouter } from "next/router";
import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import Genres from "./Genres";
import Search from "./Search";
import UserStatus from "./UserStatus";

export default function MainContent({ mainPage, ...props }) {
  const { pathname } = useRouter();
  const route = pathname.split("/")[1];
  console.log(route);
  return (
    <div className="__mainContainer__   flex flex-col w-[100vw]">
      <div className="__TopBar__ flex  p-5 items-center justify-around">
        <Search />
        <UserStatus />
      </div>
      <div className="_ContentContainer__  flex">
        <div className="__MiddleContent__ w-full flex flex-col">
          {props.noBanner ? "" : <Banner />}
          {pathname === "Upcoming" ? (
            <>
              <Genres
                key={1}
                data={mainPage[0].results}
                genre={"Upcoming Movies"}
                path={"movies"}
              />
            </>
          ) : (
            <>
              <Genres key={1} data={mainPage[0].results} genre={"Trending"} />
              {route === "Home" || route === "Upcoming" ? (
                <></>
              ) : (
                <Genres
                  key={2}
                  data={mainPage[1].results}
                  path={route === "Home" ? "all" : route}
                  genre={`Top Rated ${route === "Home" ? "all" : route}`}
                />
              )}
            </>
          )}
        </div>

        <div className="__sideContent__ hidden lg:block w-2/5">
          <Categories />
        </div>
      </div>
    </div>
  );
}
