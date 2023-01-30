import React from "react";

export default function Categories() {
  return (
    <div className="CategoriesCard flex flex-col space-y-5">
      <div className="Title flex justify-around">
        <span className="text-white">Categories</span>
        <span className="font-thin text-white">Untrack all</span>
      </div>

      <div className="ManyCheckOptions flex flex-col bg-[#212121] p-3 rounded-3xl w-8/12 m-auto text-sm space-y-2">
        <div className=" px-3 flex  flex-col space-y-1 ">
          <div className="flex justify-between">
            <span className="text-white">Action</span>
            <input
              autoComplete="off"
              type="checkbox"
              className="accent-[#3DD2CC]  text-white"
              name=""
              id=""
            />
          </div>
          <hr className=" bg-[#666666] opacity-30 " />
        </div>
        <div className=" px-3 flex  flex-col space-y-1 ">
          <div className="flex justify-between">
            <span className="text-white">Action</span>
            <input
              autoComplete="off"
              type="checkbox"
              className="accent-[#3DD2CC]  text-white"
              name=""
              id=""
            />
          </div>
          <hr className=" bg-[#666666] opacity-30 " />
        </div>
        <div className=" px-3 flex  flex-col space-y-1 ">
          <div className="flex justify-between">
            <span className="text-white">Action</span>
            <input
              autoComplete="off"
              type="checkbox"
              className="accent-[#3DD2CC]  text-white"
              name=""
              id=""
            />
          </div>
          <hr className=" bg-[#666666] opacity-30 " />
        </div>
        <div className=" px-3 flex  flex-col space-y-1 ">
          <div className="flex justify-between">
            <span className="text-white">Action</span>
            <input
              autoComplete="off"
              type="checkbox"
              className="accent-[#3DD2CC]  text-white"
              name=""
              id=""
            />
          </div>
          <hr className=" bg-[#666666] opacity-30 " />
        </div>
        <div className=" px-3 flex  flex-col space-y-1 ">
          <div className="flex justify-between">
            <span className="text-white">Action</span>
            <input
              autoComplete="off"
              type="checkbox"
              className="accent-[#3DD2CC]  text-white"
              name=""
              id=""
            />
          </div>
          <hr className=" bg-[#666666] opacity-30 " />
        </div>
        <div className=" px-3 flex  flex-col space-y-1 ">
          <div className="flex justify-between">
            <span className="text-white">Action</span>
            <input
              autoComplete="off"
              type="checkbox"
              className="accent-[#3DD2CC]  text-white"
              name=""
              id=""
            />
          </div>
          <hr className=" bg-[#666666] opacity-30 " />
        </div>
        <span className="m-auto p-2 mt-5">See More</span>
      </div>
    </div>
  );
}
