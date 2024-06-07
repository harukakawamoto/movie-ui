import Image from "next/image";
import { IoTimeOutline } from "react-icons/io5";

export const View = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-main-gray w-64 h-[470px] rounded-2xl relative mr-4 ml-4 select-none drag-none ">
        <div className="absolute top-0 left-0 h-16 w-16 bg-main-red rounded-tl-2xl flex items-center justify-center">
          <p className="text-white text-2xl font-bold"></p>
        </div>
        <div className="pl-4">
          <p className="text-white mb-2 font-bold"></p>
          <div className="flex">
            <p className="text-white "></p>
          </div>
        </div>
      </div>
    </div>
  );
};
