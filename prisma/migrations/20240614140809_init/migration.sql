-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "movieId" INTEGER NOT NULL,
    "movieName" TEXT NOT NULL,
    "screeningTime" INTEGER NOT NULL,
    "startTime" TEXT NOT NULL,
    "overview" TEXT,
    "thumbnail" TEXT NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);
