import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
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

app.use(express.json());

app.listen(PORT, () => {
  {
    console.log("Server is running on port 5173...");
  }
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: "false",
    statusCode,
    message,
  });
});
