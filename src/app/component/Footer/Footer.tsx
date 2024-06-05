import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoTicketSharp, IoPersonCircleOutline } from "react-icons/io5";
import { isPage } from "./useProps";

export default function Footer(props: isPage) {
  return (
    <div className="h-20 max-w-sm bg-main-bar-gray flex justify-around items-center text-4xl ">
      <IoMdHome className={props.isHome ? "text-main-red" : "text-main-grey"} />
      <IoTicketSharp
        className={props.isTicket ? "text-main-red" : "text-main-grey"}
      />
      <IoPersonCircleOutline
        className={props.isProfile ? "text-main-red" : "text-main-grey"}
      />
    </div>
  );
}
