"use client";

import Footer from "./Footer";
import { useProps } from "./useProps";

export const Page = () => {
  return <Footer {...useProps()} />;
};
