import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectMongo from "@/utils/mongoose";
import WatchList from "@/models/watchlist";

export async function GET(request: NextRequest) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "You must be login!" }, { status: 401 });
  }

  await connectMongo();

  try {
    const result = await WatchList.find({
      userId: session?.user?.email,
    });

    return NextResponse.json(JSON.parse(JSON.stringify(result)));
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 401 });
  }
}
