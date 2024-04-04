import React from "react";
import { logo_URL, menu_URL, notification_URL, user_URL } from "./Asserts";

const Head = () => {
  return (
    <div className="mx-0 my-5 flex justify-between shadow-lg px-5 pb-3 ">
      <div className="flex">
        <img className="h-6" alt="menu" src={menu_URL} />
        <img className="w-24 mx-6" alt="logo" src={logo_URL} />
      </div>
      <div className="flex mx-24 ">
        <input className="border border-gray-800 px-3 pr-44 rounded-l-full py-1" type="text" placeholder="Search" />
        <button className="border border-gray-800 px-3  rounded-r-full py-1 mx-1" >Search</button>
      </div>
      <div className="flex ">
        <img className="h-6 mx-6 " alt="notification" src={notification_URL} />
        <img className="h-6" alt="user" src={user_URL} />
      </div>
    </div>
  );
};

export default Head;
