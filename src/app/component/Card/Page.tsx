import { View } from "./View";
import { useProps } from "./useProps";
import { Props } from "./useProps";

export const Page = (props: Props) => {
  return <View {...useProps(props)} />;
};
