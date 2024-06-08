"use client";

import { useProps as Props } from "./useProps";
import { View } from "./View";

const page = () => {
  return <View {...Props()} />;
};

export default page;
