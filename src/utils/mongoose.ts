import mongoose from "mongoose";

import { MONGO_URI, DATABASE } from "@/config";

if (!MONGO_URI) throw new Error("MONGO_URI is not defined.");

let cached = global.mongoose;

if (!cached) cached = global.mongoose = { conn: null };

const connectMongo = async () => {
  if (cached.conn) return cached.conn;

  cached.conn = await mongoose.connect(MONGO_URI, { dbName: DATABASE });

  return cached.conn;
};

export default connectMongo;
