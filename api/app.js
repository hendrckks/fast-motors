import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

import axios from "axios";
const app = express();

dotenv.config();
const PORT = process.env.port || 5173;

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("database connected succesfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  {
    console.log("Server is running on port 5173...");
  }
});
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
