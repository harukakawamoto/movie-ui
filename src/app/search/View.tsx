import { Page as SearchMovieList } from "@/components/SearchMovieList/Page";
import { Props } from "./useProps";

export const View: React.FC<Props> = (props) => {
  return (
    <div
      className="flex flex-col"
      style={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      <div
        className="bg-white border-2 p-2 relative rounded-xl flex"
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
      >
        <span className="flex justify-end items-center text-gray-500 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          name="episodequery"
          onChange={props.onChangeHandler}
          id="title"
          className="border-white outline-none border-0 w-full rounded-xl p-2"
          type="text"
          placeholder="Search Movie"
        />
        <button
          onClick={props.onClickMovieHandler}
          className="bg-black hover:bg-gray-700 rounded-xl text-white text-xl p-2 pl-4 pr-4 ml-2"
        >
          <p className="font-semibold text-xs">Search</p>
        </button>
      </div>
      <div className="flex-grow overflow-x-auto" style={{ width: "100%" }}>
        <SearchMovieList movieList={props.movies} />
      </div>
    </div>
  );
};
