import { useRouter } from "next/router";
import React from "react";

export default function signUP() {
  const router = useRouter();
  return (
    <div className="flex flex-row items-center min-h-screen bg-black">
      <div className="form_div shadow-3xl  flex items-center justify-start min-h-screen flex-1 bg-[#191919] text-white">
        <div className="container flex flex-col    items-center justify-start">
          <h1 className="text-lg "> Welcome back, Olivia</h1>
          <span className="font-medium text-xs text-[#BABABAB2]">
            Welcome back! Please enter your details.
          </span>
          <button className="mt-5 border w-2/4 border-[#4D4B4B] flex   bg-transparent p-3  rounded-xl justify-center space-x-2">
            <img
              className="w-5 h-5"
              src="/image/Google.png"
              alt="Google Login"
            />
            <span className="text-white text-sm">Log in with Google</span>
          </button>
          <div className="__form__ flex  mt-5 w-2/4 items-stretch flex-col  space-y-5">
            <input
              autoComplete="off"
              type="email"
              name="email_input "
              id="Email"
              placeholder="Email"
              className="text-[#BABABA]   bg-transparent border-b border-[#4D4B4B] outline-none text-sm"
            />
            <input
              autoComplete="off"
              type="password"
              placeholder="Password"
              name="password_input"
              id="password"
              className="text-[#BABABA]   bg-transparent border-b border-[#4D4B4B] outline-none text-sm"
            />
            <div className="flex space-x-4">
              <input
                className="accent-[#4D4B4B] bg-[#4D4B4B] rounded"
                type="checkbox"
                name=""
                id=""
                checked={true}
              />
              <div className="font-normal text-sm text-[#FEFEFE80]">
                Remember me for 30 days
              </div>
            </div>

            <button
              onClick={() => {
                router.push("/Home");
              }}
              className="mt-10 bg-white p-2 rounded-md text-black"
            >
              Log in
            </button>

            <div className="flex justify-center mt-5">
              <span className="text-sm font-light">
                Don’t have an account ?
                <span className="font-normal text-sm ">Sign up for free</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex picture_div  min-h-screen lg:max-w-[540px] flex-1  bg-no-repeat bg-[url('/image/Login.png')]  bg-cover  text-white">
        <div className="flex  ">
          <div className="flex flex-col justify-end   text-start min-w-max flex-1  ">
            <div className="ml-10 p-2 rounded-md  backdrop-blur text-sm md:text-lg">
              <h1 className=" text-xl">She-Hulk: Attorney at Law</h1>
              <h2 className="text-sm">TV Series | 2022 | TV-14</h2>
              <h2 className="text-lg">Genres : Action , Adventure , Comedy</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col  justify-end   flex-1  min-w-max ">
          <div className="text-sm md:text-lg">
            <div className="flex items-center space-x-2">
              <img className="w-10 h-10" src="/image/IMDb.png" alt="" />

              <img className="w-5 h-5" src="/image/Star.png" alt="" />
              <span className="text-sm">5.4 / 10</span>
            </div>
            <div className="flex justify-between">
              <img className="w-14 h-14" src="/image/CircleLeft.png" alt="" />
              <img
                className="w-14 h-14 rotate-180"
                src="/image/CircleLeft.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
