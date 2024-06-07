import { delay, http, HttpResponse } from "msw";

export const handlers = [
  // 映画履歴の全件取得
  http.get(`${process.env.NEXT_PUBLIC_API_URL}/movies`, async () => {
    await delay(3000);
    return HttpResponse.json([
      {
        movieId: 1,
        movieName: "鬼滅の刃",
        screeningTime: 115,
        startTime: new Date(2024, 6, 5).toISOString(),
        overview: "",
        thumbnail:
          "https://image.tmdb.org/t/p/w500/3daOEMQCOGU2n9EbUC0PICnUCek.jpg",
      },
      {
        movieId: 2,
        movieName: "マトリックス",
        screeningTime: 124,
        startTime: new Date(2024, 6, 7).toISOString(),
        overview: "",
        thumbnail:
          "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      },
      {
        movieId: 3,
        movieName: "Spider-man Home comming",
        screeningTime: 130,
        startTime: new Date(2024, 6, 11).toISOString(),
        overview: "",
        thumbnail:
          "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
      },
    ]);
  }),
];
