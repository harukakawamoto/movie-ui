import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoTicketSharp, IoPersonCircleOutline } from "react-icons/io5";
import { isPage } from "./useProps";

export const View = (props: isPage) => {
  return (
    <footer className="h-20 w-full bg-main-bar-gray flex justify-around items-center text-4xl ">
      <IoMdHome className={props.isHome ? "text-main-red" : "text-main-gray"} />
      <IoTicketSharp
        className={props.isTicket ? "text-main-red" : "text-main-gray"}
      />
      <IoPersonCircleOutline
        className={props.isProfile ? "text-main-red" : "text-main-gray"}
      />
    </footer>
  );
};
