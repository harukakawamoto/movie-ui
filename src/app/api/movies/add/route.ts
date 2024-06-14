import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const {
      movieId,
      movieName,
      screeningTime,
      startTime,
      overview,
      thumbnail,
    } = await req.json();

    const newMovie = await prisma.movie.create({
      data: {
        movieId,
        movieName,
        screeningTime,
        startTime,
        overview,
        thumbnail,
      },
    });

    return NextResponse.json(newMovie, { status: 200 });
  } catch (error) {
    let errorMessage = "An unexpected error occurred";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { error: "Failed to create movie", message: errorMessage },
      { status: 500 }
    );
  }
}
