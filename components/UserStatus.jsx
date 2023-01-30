import React from "react";

export default function UserStatus() {
  return (
    <div className="__UserStatus__ flex  w-3/4  items-center justify-end space-x-2">
      <div className="rounded-full p-2  bg-[#212121] shadow-2xl">
        <img className="w-5 h-5" src="/image/Notification.png" alt="" />
      </div>
      <img src="/image/UserImage.png" className="w-10 h-10" alt="" />
    </div>
  );
}
