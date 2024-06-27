import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI!)
  .then(() => console.log("Mongodb connected successfully!"))
  .catch((err) => console.error(err));

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const val = searchParams.get("val");
    const client = new MongoClient(MONGO_URI!);
    console.log("client connected!");
    const database = client.db("test");
    const collection = database.collection("cars");

    const data = await collection
      .find({ "vehicle.make": val })
      .limit(12)
      .toArray();
    const dataLength = data.length;
    console.log(dataLength);
    return NextResponse.json({
      data,
      dataLength,
    });
  } catch (err) {
    console.error(err);
  }
};
