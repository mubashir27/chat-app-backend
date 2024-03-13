import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export default async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("DB has connected");
  } catch (error) {
    console.error("DB connection error", error);
  }
};