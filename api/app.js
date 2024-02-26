import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("database connected succesfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());

app.use(cookieParser());

const PORT = 3000;

app.listen(PORT, () => {
  console.log("listening on port 3000...");
});

app.use("/api/user", userRouter);
app.use("/auth", authRouter);

//error middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: "false",
    statusCode,
    message,
  });
});
