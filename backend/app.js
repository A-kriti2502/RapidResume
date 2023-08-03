import cookieParser from "cookie-parser";
import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/user.js"
import { errorMiddleware } from "./middleware/error.js";
import cors from "cors";

// MIDDLEWARES
export const app = express();

app.use(express.json());
app.use(cookieParser());

config({
    path:"./data/config.env"
})

cors({
    origin: [process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true, 
});

//USING ROUTES
app.use("/api/v3/user",userRouter);
app.use(errorMiddleware);