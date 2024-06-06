import Image from "next/image";
import { IoTimeOutline } from "react-icons/io5";

export type Props = {
  title: string;
  ViewingDate: string;
  startTime: string;
  endTime: string;
  thumbnail: string;
};

export const View = (props: Props) => {
  return (
    <div className="bg-main-gray w-64 h-[470px] rounded-2xl relative mr-4 ml-4 select-none drag-none">
      <div className="absolute top-0 left-0 h-16 w-16 bg-main-red rounded-tl-2xl flex items-center justify-center">
        <p className="text-white text-2xl font-bold">{props.ViewingDate}</p>
      </div>
      <div className="h-[85%]">
        <Image
          src={props.thumbnail}
          alt={`${props.title}の画像`}
          width={256}
          height={256}
          className="rounded-t-2xl "
          draggable="false"
        />
      </div>

      <div className="pl-4">
        <p className="text-white mb-2 font-bold">{props.title}</p>
        <div className="flex">
          <IoTimeOutline className="text-white text-2xl mr-2" />
          <p className="text-white ">
            {props.startTime}&#x007e;{props.endTime}
          </p>
        </div>
      </div>
    </div>
  );
};
