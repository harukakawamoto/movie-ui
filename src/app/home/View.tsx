import { Page as MovieList } from "@/components/MovieList/Page";

export const View = () => {
  return (
    <div className="flex-grow overflow-x-auto">
      <MovieList />
    </div>
  );
};
