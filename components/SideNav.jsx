import React from "react";
import { useAppContext } from "../lib/StateManagement";
export default function SideNav() {
  const [navState, setnavState] = useAppContext().navigation;

  const navItems = [
    {
      icon: <img src="/svg/Home.png" alt="" className="stroke-white" />,

      name: <span>Home</span>,
    },
    {
      icon: <img src="/image/Projector.png" alt="" className="stroke-white" />,
      name: <span>Movies</span>,
    },
    {
      icon: <img src="/image/Tv.png" alt="" className="stroke-white" />,
      name: <span> TV Series</span>,
    },
    {
      icon: <img src="/image/Calendar.png" alt="" className="stroke-white" />,
      name: <span>Upcoming</span>,
    },
  ];

  return (
    <div className="__side_nav hidden shadow rounded-r-3xl bg-[#212121] md:min-h-screen w-[15vw] md:block">
      <div className="fixed  w-[14vw] flex flex-col items-center ">
        <div className="__logo__title__ w-full  p-1 drop-shadow-md">
          <img
            src="/svg/movibes.svg"
            className=" m-3 w-8/12  ml-auto mr-auto"
            alt=""
          />
        </div>
        <div className="flex flex-col __navigationContainer__ text-sm">
          {navItems.map((item, id) => {
            return (
              <>
                <div className="w-full rounded-md flex items-center  p-3 space-x-2 hover:bg-[#3DD2CC66] text-center hover:text-[#3DD2CC]">
                  {item.icon}
                  {item.name}
                </div>
              </>
            );
          })}
        </div>
        <div className="__Ticket___  mt-10 bg-[#191919] text-white text-xs w-8/12 h-fit py-1 px-3 rounded-xl m-auto relative flex flex-col justify-center items-center">
          <div className=" absolute -top-5 left-[35%]  rounded-full p-2 bg-[#3dd2cd70] shadow-2xl shadow-black">
            <img
              className="drop-shadow h-5 w-5"
              src="/image/Ticket2.png"
              alt=""
            />
            {/* <img className="drop-shadow h-5 w-5" src="/image/Ticket.png" alt="" /> */}
          </div>
          <p className="mt-5 text-start text-[#E8E8E8CC]  text-[10px]">
            Play movie quizes and earn free tickets
          </p>
          <p className="text-[9px] text-[#666666] mt-2">
            50k people are playing now
          </p>
          <button className="p-2 mt-5 m-auto text-xs bg-[#3DD2CC66] rounded-3xl text-[#3DD2CC]">
            {" "}
            Start Playing
          </button>
        </div>
      </div>
    </div>
  );
}
