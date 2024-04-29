import mongoose from "mongoose";

export const connectMongo = () => {
    const uri = process.env.MONGO_URL;
    mongoose
      .connect(uri)
      .then(() => console.log("DB connected"))
      .catch((error) => console.log(error));
  };