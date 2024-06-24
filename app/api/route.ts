import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("mongodb connected successfully"))
  .catch((err) => console.error(err));

export const GET = async (request: Request) => {
  const client = new MongoClient(process.env.MONGO_URI!);
  try {
    await client.connect();
    console.log("client connected");
    const database = client.db("test");
    const collection = database.collection("cars");
    const data = await collection.find({}).toArray();
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
  }
  return NextResponse.json({
    message: "Internal Server Error!",
  });
};
