import { formattedMovieInfo } from "@/type/MovieType";
import Image from "next/image";
export const View = (movieInfo: formattedMovieInfo) => {
  return (
    <div className="block overflow-auto pb-40">
      <div className="text-white text-center">
        <Image
          src={movieInfo.thumbnail}
          alt="ポスター画像"
          width={256}
          height={256}
          className="mx-auto rounded-2xl"
        />
        <div className="text-3xl font-bold mt-4">{movieInfo.title}</div>
        <div className="flex justify-center space-x-4 mt-2">
          <div>公開日：{movieInfo.release_date}</div>
          <div>{movieInfo.runtime}</div>
        </div>
        <div className="mt-4 mx-8 overflow-y-auto text-left">
          {movieInfo.overview}
        </div>
      </div>
      {movieInfo.isResister ? (
        <div className="m-8 text-white">
          <div className="pb-2">
            <p>視聴予定時刻</p>
            <input
              type="datetime-local"
              onChange={movieInfo.onChange}
              value={movieInfo.startTime}
            />
          </div>
          <button onClick={movieInfo.onClick}>登録する</button>
        </div>
      ) : null}
    </div>
  );
};
