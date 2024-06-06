"use client";

import { View } from "@/components/MovieList/View";
import { useProps } from "@/components/MovieList/useProps";

export const Page = () => {
  return <View {...useProps()} />;
};
