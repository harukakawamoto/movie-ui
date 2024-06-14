import React from "react";
import { IoMdHome } from "react-icons/io";
import Link from "next/link";
import { IoTicketSharp, IoPersonCircleOutline } from "react-icons/io5";
import { isPage } from "./useProps";

export const View = (props: isPage) => {
  return (
    <footer className="h-20 w-full bg-main-bar-gray flex justify-around items-center text-4xl bottom-0 left-0 fixed z-10">
      <Link href="/home">
        <IoMdHome
          className={`text-6xl ${props.isHome ? "text-main-red" : "text-main-gray"}`}
        />
      </Link>
      <Link href="/ticket">
        <IoTicketSharp
          className={`text-6xl ${props.isTicket ? "text-main-red" : "text-main-gray"}`}
        />
      </Link>
      <Link href="/profile">
        <IoPersonCircleOutline
          className={`text-6xl ${props.isProfile ? "text-main-red" : "text-main-gray"}`}
        />
      </Link>
    </footer>
  );
};
