import { Props as ViewProps } from "./View";

export type Props = {
  title: string;
  release_date: string;
  thumbnail: string;
};

export const useProps = (props: Props): ViewProps => {
  const date = new Date(props.release_date);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月は0から11までのため1を足します
  const day = date.getDate();

  const formattedDate = `${year}年${month}月${day}日`;

  return {
    title: props.title,
    thumbnail: props.thumbnail,
    release_date: formattedDate,
  };
};
