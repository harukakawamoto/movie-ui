"use client";

import { formattedMovieInfo } from "@/type/MovieType";
import { View } from "./View";

export const Page = (props: formattedMovieInfo) => {
  return <View {...props} />;
};
