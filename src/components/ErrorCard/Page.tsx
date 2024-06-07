"use client";

import { View } from "./View";
import { useProps } from "./useProps";

export const Page = () => {
  return <View {...useProps()} />;
};
