import Image from "next/image";
import { IoTimeOutline } from "react-icons/io5";

export type Props = {
  title: string;
  release_date: string;
  thumbnail: string;
};

export const View = (props: Props) => {
  return (
    <div className="bg-main-gray w-64 h-[470px] rounded-2xl relative mr-4 ml-4 select-none drag-none">
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
        <p className="text-white mb-2 font-bold truncate mr-2">{props.title}</p>
        <div className="flex">
          <p className="text-white ">公開日：{props.release_date}</p>
        </div>
      </div>
    </div>
  );
};
