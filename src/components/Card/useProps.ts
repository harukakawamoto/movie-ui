import { Props as ViewProps } from "./View";

export type Props = {
  title: string;
  startDate: Date;
  screeningTime: number;
  thumbnail: string;
};

export const useProps = (props: Props): ViewProps => {
  //月日と時間と分数を取得
  const month = props.startDate.getMonth() + 1;
  const day = props.startDate.getDate();
  const starthours = props.startDate.getHours().toString().padStart(2, "0");
  const startminutes = props.startDate.getMinutes().toString().padStart(2, "0");

  // 6/1のようにフォーマットする
  const ViewingDate = `${month}/${day}`;

  // 開始時刻を14:00のようにフォーマットする
  const startTime = `${starthours}:${startminutes}`;

  // 終了時刻を16:00のようにフォーマットする
  const endDate = new Date(
    props.startDate.getTime() + props.screeningTime * 60000
  );
  const endhours = endDate.getHours().toString().padStart(2, "0");
  const endminutes = endDate.getMinutes().toString().padStart(2, "0");
  const endTime = `${endhours}:${endminutes}`;

  return {
    title: props.title,
    thumbnail: props.thumbnail,
    ViewingDate: ViewingDate,
    startTime: startTime,
    endTime: endTime,
  };
};
