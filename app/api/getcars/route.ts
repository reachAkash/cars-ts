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
    const page = searchParams.get("page") || 0;
    const limit = searchParams.get("limit") || 0;
    const client = new MongoClient(MONGO_URI!);
    console.log("client connected!");
    const database = client.db("test");
    const collection = database.collection("cars");
    const searchFilters: any = {};

    searchParams.forEach((value, key) => {
      if (key == "val") {
        searchFilters["$or"] = [
          {
            "vehicle.make": value,
          },
          {
            "vehicle.model": value,
          },
        ];
      } else if (key == "bodyType") {
        searchFilters["vehicle.model"] = value;
      } else if (key != "page" && key != "limit") {
        searchFilters["vehicle.standard.bodyType"] = key;
      }
    });

    console.log(searchFilters);

    const data = await collection
      .find(searchFilters)
      .skip(Number(page) * 9)
      .limit(Number(limit))
      .toArray();
    const dataLength = (await collection.find(searchFilters).toArray()).length;
    return NextResponse.json({
      data,
      dataLength,
    });
  } catch (err) {
    console.error(err);
  }
};
