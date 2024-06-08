import Image from "next/image";
import { Props } from "./useProps";

export const View = (props: Props) => {
  return (
    <div className="bg-main-gray w-64 h-[470px] rounded-2xl relative mr-4 ml-4 select-none drag-none">
      <div className="h-[85%]">
        <svg xmlns={props.thumbnail} className="rounded-t-2xl " />
      </div>
    </div>
  );
};
