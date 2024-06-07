export type Props = {
  thumbnail: string;
};

export const useProps = (): Props => {
  return {
    thumbnail: "./errorImage.svg",
  };
};
