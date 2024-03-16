"use server";
import { getServerSession } from "next-auth";
import connectMongo from "@/utils/mongoose";
import WatchList from "@/models/watchlist";

export async function createWatchList(prevState: any, formData: FormData) {
  const session = await getServerSession();

  if (!session) {
    return { message: "login" };
  }

  try {
    await connectMongo();
    await WatchList.create({
      userId: session?.user?.email,
      listId: formData.get("listId"),
      title: formData.get("title"),
      image: formData.get("image"),
      type: formData.get("type"),
      episode: formData.get("episode"),
      episodeId: formData.get("episodeId"),
      status: formData.get("status"),
    });

    return { message: "success" };
  } catch (error) {
    console.log(error);
    return { message: error };
  }
}
