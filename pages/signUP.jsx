import React from "react";
import { useRouter } from "next/router";
export default function signUP() {
  const router = useRouter();
  return (
    <div className="flex flex-row items-center min-h-screen bg-black">
      <div className="hidden md:flex picture_div  min-h-screen lg:max-w-[540px] flex-1  bg-no-repeat bg-[url('/image/imageSample.png')]  bg-cover  text-white">
        <div className="flex flex-col justify-center  min-w-max flex-1 min-h-screen backdrop-blur-sm">
          <div className="ml-10 mt-10 w-4/6 text-sm md:text-lg">
            <h1 className="">Benefits of your free IMDb account</h1>
            <div className="second_line mt-2">
              <h2 className=" text-base">Personalized Recommendations</h2>
              <span className="font-medium text-xs">
                {" "}
                Discover shows you'll love
              </span>
            </div>
            <div className="third_line mt-2">
              <h2 className=" ">Your Ratings</h2>
              <span className="text-xs  font-medium md:text-sm">
                {" "}
                Rate and remember everything you've seen
              </span>
            </div>
            <div className="third_line mt-2">
              <h2 className=" ">Contribute to IMDb</h2>
              <span className="text-xs  font-medium md:text-sm">
                {" "}
                Add data that will be seen by millions of people and get cool
                badges.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="form_div shadow-3xl  flex items-center justify-start min-h-screen flex-1 bg-[#191919] backdrop-blur-sm text-white">
        <div className="container flex flex-col  items-center justify-start">
          <h1 className="text-lg "> Create an account</h1>
          <span className="font-light text-xs">
            {" "}
            Let's get started with your 30 days free trial
          </span>

          <div className="__form__ flex  mt-5 w-2/4 items-stretch flex-col  space-y-5">
            <input
              autoComplete="off"
              type="text"
              name="name_input "
              id=""
              placeholder="Name"
              className=" text-[#BABABA]  bg-transparent border-b border-[#4D4B4B] outline-none text-sm"
            />
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
            <button
              onClick={() => {
                router.push("/Login");
              }}
              className="mt-10 bg-white p-2 rounded-md text-black"
            >
              Create account
            </button>
            <button
              onClick={() => {
                router.push("/Login");
              }}
              className="mt-2 border border-[#4D4B4B] flex   bg-transparent p-3  rounded-xl justify-center space-x-2"
            >
              <img
                className="w-5 h-5"
                src="/image/Google.png"
                alt="Google Login"
              />
              <span className="text-white text-sm">Sign Up with Google</span>
            </button>
            <div className="flex justify-center mt-5">
              <span className="text-sm font-light">
                Already have an account?{" "}
                <span
                  onClick={() => {
                    router.push("/Login");
                  }}
                  className="font-normal cursor-pointer"
                >
                  Login
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
