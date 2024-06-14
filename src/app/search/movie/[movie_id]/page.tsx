"use client";

import { View } from "./View";
import { useProps } from "./useProps";

const Page = () => {
  return <View {...useProps()} />;
};

export default Page;
