import mongoose from "mongoose";

//Connection

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "UserResumeData",
    })
    .then((c) => console.log("Database Connected!!!"))
    .catch((e) => console.log(e));
};